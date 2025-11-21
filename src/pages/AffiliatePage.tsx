import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HeroBanner } from "@/components/HeroBanner";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company/Brand name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  website: z.string().min(1, "Website URL is required"),
  country: z.string().min(1, "Please select a country"),
  businessType: z.string().min(1, "Please select a business type"),
  promotionPlan: z.string().min(10, "Please provide more details (at least 10 characters)"),
  additionalNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AffiliatePage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      website: "",
      country: "",
      businessType: "",
      promotionPlan: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Placeholder for email functionality
    console.log("Form submitted:", data);
    
    // TODO: Implement email sending to isaac@legacyseller.com
    // This will be set up with Lovable Cloud later
    
    // Show success message
    setIsSubmitted(true);
  };

  return (
    <>
      <HeroBanner
        headline="Become a Parcelis Affiliate"
        subheadline="Fill out the form below to apply to become an affiliate. Once submitted, our team will review your details and contact you by email."
        primaryCTA={{
          text: "Get Started",
          href: "/apply",
        }}
      />

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {isSubmitted ? (
            <div className="text-center py-16">
              <CheckCircle2 className="w-20 h-20 text-success mx-auto mb-6" />
              <h2 className="text-h2 font-bold mb-4 text-foreground">
                Thank You!
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
                Your application has been submitted. Our team will review it and contact you shortly.
              </p>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-6 md:p-10 shadow-md">
              <h2 className="text-h3 font-bold mb-2 text-foreground">
                Affiliate Application
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below to join our affiliate program.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Company */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Brand Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Website */}
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL *</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Country & Business Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country / Region *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="de">Germany</SelectItem>
                              <SelectItem value="fr">France</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What best describes you? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ecommerce">Ecommerce brand</SelectItem>
                              <SelectItem value="agency">Agency</SelectItem>
                              <SelectItem value="saas">SaaS / Tech partner</SelectItem>
                              <SelectItem value="3pl">3PL / Fulfillment</SelectItem>
                              <SelectItem value="creator">Creator / Influencer</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Promotion Plan */}
                  <FormField
                    control={form.control}
                    name="promotionPlan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How do you plan to promote Parcelis? *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your promotional strategy, audience, and how you plan to refer merchants to Parcelis..."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Additional Notes */}
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Anything else we should know? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share any additional information that might help us process your application..."
                            className="min-h-24"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AffiliatePage;
