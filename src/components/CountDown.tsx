import { useEffect, useState } from "react";
import { data } from "../data/data";
import dayjs from "dayjs";

export default function Countdown() {
  const { date } = data;
  const weddingDate = dayjs(date).valueOf();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="py-5 relative">
      <div className="container mx-auto px-1 text-center">
        <div className="grid grid-cols-4 gap-6 max-w-xl mx-auto">
          {[
            { value: timeLeft.days, label: "Ngày" },
            { value: timeLeft.hours, label: "Giờ" },
            { value: timeLeft.minutes, label: "Phút" },
            { value: timeLeft.seconds, label: "Giây" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#e1ddaa] text-[darkblue] backdrop-blur-lg rounded-2xl p-2 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-xl md:text-xl font-bold mb-2">{item.value.toString().padStart(2, "0")}</div>
              <div className="text-lg uppercase tracking-wider opacity-90">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-flower-line !bottom-[-40%]" />
    </section>
  );
}
