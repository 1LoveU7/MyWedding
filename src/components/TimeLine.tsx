import { useRevealItems } from "./animation";
import { TypingText } from "./animation/typingText";

const TimelineDresscode = () => {
  const timeline = [
    { time: "09:00", label: "Lễ thành hôn", icon: "💍" },
    { time: "10:30", label: "Checkin", icon: "📷" },
    { time: "11:00", label: "Khai tiệc", icon: "🥂" },
  ];
  const reveal = useRevealItems<HTMLDivElement>();
  return (
    <section className="reveal fade-up" ref={reveal} data-once>
      <section
        className="bg-[#F9F6F0] text-center bg-center bg-no-repeat bg-cover pt-40"
        data-once
        style={{ backgroundImage: "url('/images-min/NGOC1190.jpg')" }}
      >
        <div className="bg-flower-line !-top-[9%]" />
        <div className="bg-gradient-to-t from-white/90 via-white/40 to-transparent pb-2">
          {/* TITLE */}
          <h2 className="allura-regular text-5xl text-red-700 mb-5 text-reveal text-border" style={{ "--line": 0 } as React.CSSProperties}>
            Timeline
          </h2>

          {/* TIMELINE */}
          <div className="grid grid-cols-3 gap-4 mb-7">
            {timeline.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-reveal--stagger" style={{ "--i": i * 2 + 1 } as React.CSSProperties}>
                <span className="text-4xl grayscale opacity-80 ">{item.icon}</span>
                <span className="font-bold text-lg">{item.time}</span>
                <span className="text-sm text-red-700">{item.label}</span>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <div>
            <TypingText
              className="text-blue-950 text-sm max-w-[250px] mx-auto italic pb-10"
              text="Rất mong bạn có thể sắp xếp tới sớm để chụp thật nhiều ảnh kỷ niệm cùng chúng mình nhé!"
              startIndex={0}
              data-once
            />
          </div>
        </div>
      </section>
    </section>
  );
};
export default TimelineDresscode;
