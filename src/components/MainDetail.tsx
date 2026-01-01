// import { useRef } from "react";
import { data } from "../data/data";
import { useRevealItems } from "./animation";
import TextSlide from "./animation/textSlide";

const WeddingCard = () => {
  const { crBa, crMa, crCountry, crF, cdBa, cdMa, cdF, cdCountry } = data;
  const reveal = useRevealItems<HTMLDivElement>();
  return (
    <div className="relative max-w-md mx-auto bg-transparent min-h-screen shadow-lg font-serif text-blue-900 py-4 border border-gray-100">
      <p
        // href="#borderPath"
        // startOffset="0%"
        className="relative text-center text-[25px] italic text-[#f77c04] px-2 mt-3 leading-relaxed animate-fade-in fleur-de-leah-regular "
      >
        <img src="/images/toptext.png" alt="decoration" className=" w-20 -left-0 -bottom-4 -rotate-90 absolute" />
        ✦ Một hành trình mới của chúng mình ✦<br />✦ bắt đầu từ hôm nay ✦
        <img src="/images/toptext.png" alt="decoration" className="w-20 -right-0 -bottom-4 -rotate-180 absolute" />{" "}
      </p>

      <img
        src="https://www.transparentpng.com/download/love/PssZ6a-love-hd-photo-transparent-images.png"
        alt="decoration"
        className="z-50 w-26 h-24 left-[35%] top-[50%] absolute"
      />
      <div className="grid grid-cols-2 gap-0 border-t border-bltext-blue-900/10 overflow-hidden">
        <div className="reveal slide-left" ref={reveal} data-once>
          <img src="/images/toptext.png" alt="decoration" className="z-50 absolute" />
          <div className="flex flex-col items-center justify-center px-2 py-4 text-center text-blue-900">
            <h2 className="text-xl mb-1">Nhà Trai</h2>
            <div className="w-24 border-t border-dotted border-bl text-blue-900 mb-4"></div>

            <div className="lavishly-yours-regular space-y-1 text-slide-up text-reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <h6 className="mb-1 text-[18px] ">Ông: {crBa}</h6>
              <h6 className=" text-[16px]">Bà: {crMa}</h6>
            </div>

            <p className="text-[11px] italic text-gray-400 my-2">{crCountry}</p>

            <div className="my-2 w-20 ">
              <img
                src="https://png.pngtree.com/png-vector/20241106/ourmid/pngtree-handsome-groom-sticker-png-image_14276985.png"
                alt="icon-groom"
                className="w-full opacity-80"
              />
            </div>

            <div className="tracking-tight">
              Út nam: <br />
              <h1 className="text-[25px] mea-culpa-regular" style={{ "--i": 2 } as React.CSSProperties}>
                <TextSlide text={crF} />
              </h1>
            </div>
          </div>
        </div>

        {/* Ảnh Chú Rể */}
        <div className="reveal slide-right" ref={reveal} data-once>
          <div className="border-l border-bltext-blue-900 -mt-[1px] h-full">
            <div className="w-full object-cover h-full overflow-hidden border border-bltext-blue-900 img-frame">
              <img src="/images/border.png" alt="decoration" className="z-50 rotate-180 absolute w-full h-full object-fill" />
              <img src="/images-min/NGOC1470.JPG" alt="Chú rể" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-0 border-b border-bltext-blue-900/10 overflow-hidden">
        {/* Ảnh Cô Dâu */}
        <div className="reveal slide-left" ref={reveal} data-once>
          <div className="border-r border-bltext-blue-900 h-full">
            <div className="w-full h-full object-cover overflow-hidden border border-bltext-blue-900">
              {" "}
              <img src="/images/border.png" alt="decoration" className="z-50 rotate-180 absolute w-full h-full object-fill" />
              <img src="/images-min/NGOC1022.JPG" alt="Cô dâu" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* Thông tin Nhà Gái */}
        <div className="reveal slide-right" ref={reveal} data-once>
          <img src="/images/toptext.png" alt="decoration" className="z-50 -bottom-0 -right-3 rotate-180 absolute" />
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <h2 className="text-xl mb-1">Nhà Gái</h2>
            <div className="w-24 border-t border-dotted border-bltext-blue-900 mb-4"></div>

            <div className="lavishly-yours-regular space-y-1 text-slide-up text-reveal" style={{ "--i": 0 } as React.CSSProperties}>
              <h6 className="mb-1 text-[16px]">Ông: {cdBa}</h6>
              <h6 className=" text-[16px]">Bà: {cdMa}</h6>
            </div>

            <p className="text-[11px] italic text-gray-400 my-2">{cdCountry}</p>

            <div className="my-4 w-16">
              <img
                src="https://png.pngtree.com/png-clipart/20230915/original/pngtree-cartoon-bride-holding-a-bouquet-of-flowers-sticker-vector-png-image_12165071.png"
                alt="icon-bride"
                className="w-full opacity-80"
              />
            </div>

            <div className="text-lg font-semibold leading-tigh w-full">
              Thứ nữ: <br />
              <div className="line text-left" style={{ "--line": 0 } as React.CSSProperties}>
                <h1 className="text-[25px] mea-culpa-regular mb-1">
                  <TextSlide text={cdF[0]} />
                </h1>
              </div>
              {/* DÒNG 2 – PHẢI */}
              <div className="line text-right" style={{ "--line": 4 } as React.CSSProperties}>
                <h1 className="text-[25px] mea-culpa-regular">
                  <TextSlide text={cdF[1]} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
