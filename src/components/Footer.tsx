import { Heart } from "lucide-react";
import { data } from "../data/data";
import TextSlide from "./animation/textSlide";
import dayjs from "dayjs";
import { useRevealItems } from "./animation";

export default function Footer() {
  const { cr, cd, cdInvite } = data;
  const ref = useRevealItems<HTMLElement>();
  return (
    <footer className="bg-gradient-to-t from-[darkblue] to-blue-500 text-white py-12 reveal rounded-b-lg" data-once ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4 fill-rose-300 text-rose-300 animate-pulse" />
        <h3 className="font-serif text-2xl mb-2 lavishly-yours-regular">
          <TextSlide text={`${cr} & ${cd}`} />
        </h3>
        <p className="text-rose-200 mb-4">{dayjs(cdInvite).format("DD . MM . YYYY")}</p>
        <div className="flex items-center justify-center gap-2 text-rose-200">
          <span>Made with</span>
          <Heart data-one className="w-4 h-4 fill-rose-300 text-rose-300" />
          <span>and Love</span>
        </div>
      </div>
    </footer>
  );
}
