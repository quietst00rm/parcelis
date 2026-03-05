import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageSquare, Search, Bot, Sparkles } from "lucide-react";

interface AiSummarizeWidgetProps {
  articleUrl: string;
  layout?: "sidebar" | "mobile";
}

const services = [
  {
    name: "ChatGPT",
    icon: MessageSquare,
    baseUrl: "https://chatgpt.com/?q=",
    hoverLabel: "Open in ChatGPT",
  },
  {
    name: "Perplexity",
    icon: Search,
    baseUrl: "https://www.perplexity.ai/search?q=",
    hoverLabel: "Open in Perplexity",
  },
  {
    name: "Claude",
    icon: Bot,
    baseUrl: "https://claude.ai/new?q=",
    hoverLabel: "Open in Claude",
  },
  {
    name: "Gemini",
    icon: Sparkles,
    baseUrl: "https://gemini.google.com/app?q=",
    hoverLabel: "Open in Gemini",
  },
];

const AiSummarizeWidget = ({ articleUrl, layout = "sidebar" }: AiSummarizeWidgetProps) => {
  const prompt = `Summarize this article and highlight the key takeaways for a Shopify merchant: ${articleUrl}`;
  const encodedPrompt = encodeURIComponent(prompt);

  const isMobile = layout === "mobile";

  return (
    <TooltipProvider delayDuration={300}>
      <div className={`bg-white rounded-xl border border-[#e5e7eb] p-5 shadow-sm ${isMobile ? "mt-10 lg:hidden" : ""}`}>
        <h3 className="font-heading text-sm font-semibold text-[#374151] mb-1">
          Summarize with AI
        </h3>
        <p className="text-xs text-[#9ca3af] mb-4">
          Get an instant summary from your favorite AI
        </p>
        <div className={isMobile ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2"}>
          {services.map((service) => {
            const Icon = service.icon;
            const href = `${service.baseUrl}${encodedPrompt}`;
            return (
              <Tooltip key={service.name}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 w-full h-10 px-3 rounded-lg bg-[#f7f7f8] border border-[#e5e7eb] text-sm font-medium text-[#374151] hover:bg-[#ececf1] hover:-translate-y-px hover:shadow-sm transition-all duration-150 min-h-[44px]"
                  >
                    <Icon className="w-5 h-5 shrink-0 text-[#6b7280]" />
                    <span>{service.name}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent side={isMobile ? "top" : "left"}>
                  <p>{service.hoverLabel}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AiSummarizeWidget;
