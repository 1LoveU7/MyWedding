import { Heart, Star, Sparkles, Gift } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LoveStory() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const story = [
    {
      icon: Heart,
      title: "Lần đầu gặp gỡ",
      date: "Mùa Thu 2020",
      description: "Chúng tôi gặp nhau lần đầu tại một quán cà phê nhỏ. Đó là một ngày mưa, và tình yêu bắt đầu nảy nở.",
      color: "rose",
    },
    {
      icon: Star,
      title: "Hẹn hò đầu tiên",
      date: "Đông 2020",
      description: "Buổi hẹn hò đầu tiên tại công viên Tao Đàn, nơi chúng tôi dành cả ngày nói chuyện và khám phá nhau.",
      color: "pink",
    },
    {
      icon: Sparkles,
      title: "Ngày kỷ niệm",
      date: "Xuân 2021",
      description: "Một năm bên nhau với biết bao kỷ niệm đẹp. Chúng tôi biết rằng đây chính là định mệnh.",
      color: "amber",
    },
    {
      icon: Gift,
      title: "Lời cầu hôn",
      date: "Hè 2024",
      description: "Dưới ánh hoàng hôn bên bờ biển, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời anh.",
      color: "rose",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      rose: { bg: "bg-rose-500", text: "text-rose-500", border: "border-rose-500" },
      pink: { bg: "bg-pink-500", text: "text-pink-500", border: "border-pink-500" },
      amber: { bg: "bg-amber-500", text: "text-amber-500", border: "border-amber-500" },
    };
    return colors[color] || colors.rose;
  };

  return <section className="py-20 bg-white"></section>;
}
