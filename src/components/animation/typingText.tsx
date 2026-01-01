type TypingTextProps = {
  text: string;
  className?: string;
  startIndex?: number;
};

export const TypingText = ({ text, className = "", startIndex = 0 }: TypingTextProps) => {
  let charIndex = startIndex;

  return (
    <p className={`typing-text ${className}`}>
      {text.split(" ").map((word, w) => (
        <span key={w} className="word">
          {word.split("").map((char, i) => {
            const current = charIndex++;
            return (
              <span key={i} className="char" style={{ "--i": current } as React.CSSProperties}>
                {char}
              </span>
            );
          })}
          <span className="space">&nbsp;</span>
        </span>
      ))}
    </p>
  );
};
