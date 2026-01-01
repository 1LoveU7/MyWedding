import dayjs from "dayjs";
import { data } from "../data/data.ts";
import TextWave from "./animation/waveText.tsx";
import { useRevealItems } from "./animation/index.tsx";
import { TypingText } from "./animation/typingText.tsx";

const WeddingInvitation = () => {
  const date = dayjs(data.date);
  const ref = useRevealItems<HTMLDivElement>();
  const text1 = "Chúng ta đã cùng nhau đi qua nhiều thăng trầm, để nhận ra rằng được ở bên nhau là điều quý giá nhất.";

  const text2 = "Hôm nay, trước sự chứng kiến của mọi người, từ khoảnh khắc này chúng ta nhẹ nhàng gọi nhau bằng hai tiếng vợ chồng.";

  return (
    <div className="bg-[#ffffff] flex justify-center font-serif text-[#030084] reveal slide-up pb-5" data-once ref={ref}>
      <div
        className="w-full max-w-md relative overflow-hidden flex flex-col items-center bg-center bg-no-repeat bg-cover transition-opacity duration-2000 ease-in-out opacity-1 animate-fadeIn"
        style={{
          backgroundImage: "url('/images-min/NGOC0889.JPG')",
        }}
      >
        <img src="/images/91b77540-6c0a-44b6-a59e-c32bd2f4e8cd.webp" className="z-5 w-full h-full fixed" />
        <div className="text-center space-y-4 py-5 pt-7 min-[361px]:px-6 w-full bg-gradient-to-b from-white/20 via-white/0 to-transparent">
          <img className="absolute w-26 h-36 -top-1 -left-1 opacity-[0.9] object-fill" src="/images/t.png" />
          <h1 className="imperial-script-regular text-4xl italic text-[#d4af37] font-[cursive] ">
            <TextWave text="Wedding Invitation" />
          </h1>
          <p className="text-lg font-medium text-[#59ff00] text-right">{date.format("DD.MM.YYYY")}</p>
        </div>
        <div className="text-center px-6 bg-center bg-no-repeat bg-cover pt-[50%] bg-gradient-to-t from-white/90 via-white/40 to-transparent">
          <div className="flex-col fleur-de-leah-regular flex items-center justify-center gap-3 py-2 font-[cursive]">
            <span className="text-7xl font-500 italic max-[360px]:text-6xl text-left w-full">{data.cr}</span>
            <span className="text-[#4A6FA5] text-xl">&</span>
            <span className="text-6xl font-500 italic max-[360px]:text-6xl text-right w-full">{data.cd}</span>
          </div>
          <div
            className="rounded-t-full bottom-0 "
            style={{
              borderImageSource: "url('/images/k.png')",
              borderWidth: "50px",
              borderImageSlice: 153,
              borderImageRepeat: "round",
              borderBottomWidth: 1,
            }}
          >
            <TypingText className="italic text-[14px] leading-relaxed text-gray-600 text-justify" text={text1} startIndex={0} />

            <TypingText className="italic text-[14px] leading-relaxed text-gray-600 text-justify" text={text2} startIndex={text1.length} />
          </div>
        </div>
      </div>

      <div className="bg-flower-line" />
    </div>
  );
};

export default WeddingInvitation;
