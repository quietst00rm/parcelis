import { useState, useCallback } from "react";
import { Twitter, Linkedin, Facebook, LinkIcon, Check } from "lucide-react";

interface SocialShareBarProps {
  title: string;
  url: string;
}

const SocialShareBar = ({ title, url }: SocialShareBarProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "X / Twitter",
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      name: "Facebook",
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
  ];

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [url]);

  const btnClass =
    "w-10 h-10 rounded-full bg-[#f8f9fc] border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#1e22aa] hover:text-white hover:border-[#1e22aa] transition-all duration-200";

  return (
    <div className="print:hidden">
      <p className="text-xs text-[#9ca3af] uppercase tracking-wider text-center mb-2">
        Share this article
      </p>
      <div className="flex items-center justify-center gap-3">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={btnClass}
            >
              <Icon className="w-[18px] h-[18px]" />
            </a>
          );
        })}
        <div className="relative">
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className={btnClass}
          >
            {copied ? (
              <Check className="w-[18px] h-[18px]" />
            ) : (
              <LinkIcon className="w-[18px] h-[18px]" />
            )}
          </button>
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a1a2e] text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-in fade-in duration-200">
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialShareBar;
