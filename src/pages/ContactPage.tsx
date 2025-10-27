import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import hartfordLogo from "@/assets/logos/hartford.png";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! We'll respond within 24-48 hours.");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Questions about PARCELIS? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:support@parcelis.com" className="text-primary hover:underline">
                    support@parcelis.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+18005551234" className="text-primary hover:underline">
                    (800) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday-Friday, 9am-6pm EST</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-3">Merchant Dashboard Access</h3>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/login">
                    Login to Dashboard
                    <ExternalLink size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="application">Application Question</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help..."
                  rows={6}
                />
              </div>

              <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        {/* Support Resources */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Other Ways to Get Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto py-6 flex-col">
              <Link to="/apply">
                <span className="font-semibold mb-1">Apply Now</span>
                <span className="text-xs text-muted-foreground">Ready to get started?</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 flex-col">
              <Link to="/login">
                <span className="font-semibold mb-1">Merchant Dashboard</span>
                <span className="text-xs text-muted-foreground">Existing merchant?</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 flex-col">
              <a href="https://claims.parcelis.com" target="_blank" rel="noopener noreferrer">
                <span className="font-semibold mb-1">File a Claim</span>
                <span className="text-xs text-muted-foreground">Need to file a claim?</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-6 flex-col">
              <Link to="/pricing">
                <span className="font-semibold mb-1">View Pricing</span>
                <span className="text-xs text-muted-foreground">Calculate your costs</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* Partners Section */}
        <section className="max-w-4xl mx-auto bg-muted rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Underwritten by</p>
              <img src={hartfordLogo} alt="The Hartford insurance logo" className="h-16 object-contain mx-auto" />
            </div>
            <div className="w-full max-w-md border-t border-border pt-8">
              <p className="text-sm text-muted-foreground text-center mb-4">Supported Carriers</p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <img src={uspsLogo} alt="USPS logo" className="h-10 object-contain" />
                <img src={upsLogo} alt="UPS logo" className="h-10 object-contain" />
                <img src={fedexLogo} alt="FedEx logo" className="h-10 object-contain" />
                <img src={dhlLogo} alt="DHL logo" className="h-10 object-contain" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
