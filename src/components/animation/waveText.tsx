import React from "react";

type TextSlideProps = React.HTMLAttributes<HTMLDivElement> & {
  text?: string;
};

export default function TextWave({ text }: TextSlideProps) {
  return (
    <div className="wave-title">
      {text?.split("").map((char, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
