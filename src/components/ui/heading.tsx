import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: HeadingProps) => (
  <h1 className={cn("text-h1 font-bold", className)}>{children}</h1>
);

export const H2 = ({ children, className }: HeadingProps) => (
  <h2 className={cn("text-h2 font-bold", className)}>{children}</h2>
);

export const H3 = ({ children, className }: HeadingProps) => (
  <h3 className={cn("text-h3 font-semibold", className)}>{children}</h3>
);

export const H4 = ({ children, className }: HeadingProps) => (
  <h4 className={cn("text-h4 font-semibold", className)}>{children}</h4>
);
