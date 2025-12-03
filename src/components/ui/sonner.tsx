import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      // 👇 We add a direct style prop here to force it out of the layout
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 9999,
        pointerEvents: "none", // Lets clicks pass through to the nav
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg pointer-events-auto", // Re-enable clicks on the actual toast
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      className="toaster group"
      {...props}
    />
  );
};

export { Toaster, toast };
