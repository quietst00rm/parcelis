import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alternate";
}

export const Section = ({
  children,
  className,
  variant = "default",
}: SectionProps) => {
  return (
    <section
      className={cn(
        "py-12 md:py-24",
        variant === "alternate" && "bg-background-gray",
        className
      )}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};
