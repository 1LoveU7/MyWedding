import React from "react";

type TextSlideProps = React.HTMLAttributes<HTMLDivElement> & {
  text?: string;
  block?: boolean;
};

export default function TextSlide({ text, className = "", block = false, ...rest }: TextSlideProps) {
  if (block) return;
  <div className={`text-letter ${className}`} {...rest}>
    {text?.split(" ").map((word, w) => (
      <span key={w} className="word">
        {word.split("").map((char, i) => (
          <span key={i} className="char" style={{ "--i": i + w * 10 } as React.CSSProperties}>
            {char}
          </span>
        ))}
        <span className="space">&nbsp;</span>
      </span>
    ))}
  </div>;

  return (
    <div className={`text-letter ${className}`} {...rest}>
      {text?.split("").map((c, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </div>
  );
}
