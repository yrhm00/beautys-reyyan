import { useState } from "react";
import logoImg from "@/assets/beautys-reyyan-logo.png";

type FounderPortraitProps = {
  alt: string;
  className: string;
};

export function FounderPortrait({ alt, className }: FounderPortraitProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`${className} bg-[#F9F6F0] flex items-center justify-center p-6`}>
        <img
          src={logoImg}
          alt="Beauty's Reyyan"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );
  }

  return (
    <img
      src="/reyyan-founder.png"
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
