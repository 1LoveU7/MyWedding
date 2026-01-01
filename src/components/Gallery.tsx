import { useRevealItems } from "./animation";
import TextSlide from "./animation/textSlide";
import { TypingText } from "./animation/typingText";
import TextWave from "./animation/waveText";

const WeddingLookbook = () => {
  const ref = useRevealItems<HTMLDivElement>();
  const photos = [
    {
      src: "/images-min/NGOC0864.JPG",
      size: "w-full",
      rotation: "rotate-0",
      caption: "Em là lý do để anh tin rằng thế giới này luôn tràn ngập những điều tốt đẹp.",
    },
    { src: "/images-min/NGOC0904.JPG", size: "w-1/2", rotation: "-rotate-2", isSideBySide: true },
    { src: "/images-min/NGOC0989.JPG", size: "w-1/2", rotation: "rotate-1", isSideBySide: true },
    { src: "/images-min/NGOC1070.JPG", size: "w-4/5", rotation: "rotate-0", hasTextOverlay: true },
  ];

  return (
    <section className="relative bg-transparent min-h-screen py-10 px-4 md:px-0 font-sans text-[#4a4a4a]">
      <div className="bg-flower-line !-top-[2%] left-0" />
      <div className="max-w-screen-sm mx-auto space-y-3">
        {/* Section 1: Ảnh lớn trên cùng (Large Top Image Style) */}
        <section className="relative flex flex-col items-center pb-7 reveal" data-once ref={ref}>
          <div
            className="overflow-hidden shadow-sm bg-[#e7e6e6] p-2 image-slide-up image-reveal--stagger"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <img src={photos[0].src} alt="Wedding" className="w-full h-auto" />
          </div>
          <div className="w-full text-left -rotate-12 z-20 -mt-7">
            <p
              className="mt-2 w-2/3 pl-4 text-lg leading-relaxed font-light opacity-80 z-20 oooh-baby-regular write-up"
              style={{ "--i": 6 } as React.CSSProperties}
            >
              {photos[0].caption}
            </p>
          </div>
          <div className=" absolute bottom-7 right-2 rotate-3 image-fade-scale" style={{ "--i": 3 } as React.CSSProperties}>
            <img src="/images-cut/02cc550c15c79a99c3d633.webp" className="w-32 rounded-bl-3xl animate-pop " />
          </div>
        </section>
        {/* Section 1.5: Ảnh đôi bên cạnh nhau (Side-by-Side Photo Style) */}
        <section className="flex gap-2 items-start px-2 reveal overflow-hidden" data-once ref={ref}>
          <div className="w-1/2 transform -rotate-1 p-1 z-50">
            <img
              src={photos[1].src}
              className="w-full h-auto shadow-md mb-5 image-reveal--stagger image-slide-left"
              style={{ "--i": 0 } as React.CSSProperties}
            />
            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className="image-reveal--stagger image-slide-up text-sm font-light italic opacity-75 leading-loose oooh-baby-regular "
            >
              Cảm ơn anh đã xuất hiện, để em biết rằng mình xứng đáng được trân trọng.
            </p>
          </div>
          <div className="w-1/2 transform rotate-1 shadow-md bg-[#e7e6e6] p-1 mt-10 image-reveal--stagger image-slide-right">
            <img src={photos[2].src} className="w-full h-auto" />
          </div>
        </section>

        {/* Section 2: Ảnh với chữ viết tay (Photo with Handwritten Text Style) */}
        <section className="relative px-4 reveal overflow-hidden pt-20 !-mt-20" data-once ref={ref}>
          <div
            className="bg-[#e7e6e6] p-2 shadow-lg max-w-[90%] mx-auto image-slide-up image-reveal--stagger"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <img src={photos[3].src} className="w-full h-auto" />
          </div>
          <div className="absolute top-9 right-3 image-slide-right image-reveal--stagger" style={{ "--i": 3 } as React.CSSProperties}>
            <h3 className="fleur-de-leah text-[#2629ff] text-4xl md:text-6xl opacity-90 mea-culpa-regular text-border">Một Nhà</h3>
          </div>
          <div className=" absolute top-0 left-1 -rotate-12 animate-jiggle2 image-fade image-fade-scale" style={{ "--i": 3 } as React.CSSProperties}>
            <img src="/images-cut/0085257565beeae0b3af23.webp" />
            <img src="/images-cut/21d1bd23fde872b62bf922.webp" />
            <img src="/images-cut/5e2a65df2514aa4af30521.webp" />
          </div>
        </section>

        {/* Section 3: Ảnh Xếp chồng (Collage Style) */}
        <section className="relative py-5 bg-transparent reveal overflow-hidden" data-once ref={ref}>
          <div className="flex items-center relative justify-center">
            <div
              className=" w-56 h-72 bg-[#e7e6e6] p-2 shadow-lg transform -rotate-12 -translate-x-10 z-10 transition-all duration-500 ease-in-out hover:z-30 hover:scale-105 hover:-rotate-6 cursor-pointer group image-left"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              <img
                src="/images-min/NGOC1185.JPG"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity image-reveal--stagger image-slide-left"
              />
            </div>
            <div
              className="absolute w-60 h-80 bg-[#e7e6e6] p-2 shadow-xl transform rotate-3 translate-x-10 z-20 transition-all duration-500 ease-in-out hover:z-30 hover:scale-105 hover:rotate-0 cursor-pointer group image-right"
              style={{ "--i": 5 } as React.CSSProperties}
            >
              <img
                src="/images-min/NGOC123.jpeg"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity image-reveal--stagger image-slide-right "
              />
            </div>
          </div>

          <div className=" fleur-de-leah text-5xl text-blue-500 opacity-60 z-30 cherry-bomb-one-regular pt-4">
            <TextWave text="Long time" />
          </div>
          <div className="text-lg text-gray-500 mt-2 italic font-light leading-relaxed oooh-baby-regular">
            <TextSlide text="Mỗi ngày bên em đều là một món quà vô giá." />
          </div>
        </section>
        {/* Section 4: List ảnh */}
        <section className="relative reveal" data-once ref={ref}>
          <div className="grid grid-cols-2 gap-2 max-w-[90%] mx-auto">
            <div
              className=" absolute top-40 left-3 -rotate-12 animate-jiggle2 image-fade z-10 image-fade-scale"
              style={{ "--i": 5 } as React.CSSProperties}
            >
              <img src="/images-cut/NGOC1235.png" />
              <img src="/images-cut/NGOC1240.png" />
              <img src="/images-cut/NGOC1245.png" />
            </div>
            <img
              src="/images-min/NGOC1248.JPG"
              style={{ "--i": 0 } as React.CSSProperties}
              className="fade-left-right w-full shadow-md bg-[#e7e6e6] p-1"
            />
            <div className="relative mt-12 space-y-2 z-30">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhlamt4dGdpbXhyaWQwc3Jsdm0xaDlxNmpzaDQzbWJsY3VlMHJlaSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/m23o878mF7hFb3NIa3/giphy.gif"
                className="absolute -top-16 right-7 w-24 z-10"
              />
              <img
                src="/images-min/NGOC1314.JPG"
                style={{ "--i": 0 } as React.CSSProperties}
                className="fade-right-left w-full shadow-md bg-[#e7e6e6] p-1 "
              />
              <div className="fleur-de-leah text-2xl text-right text-red-700 cherry-bomb-one-regular">
                <TextSlide text="My Only One" />
              </div>
            </div>
            <img
              src="/images-min/NGOC1355.JPG"
              style={{ "--i": 3 } as React.CSSProperties}
              className="fade-bottom-top w-full -mt-0 col-span-2 shadow-md bg-[#e7e6e6] p-1 z-10 rounded-tr-[200px]t "
            />
          </div>
          <TypingText className=" text-blue-700 oooh-baby-regular" text="Em không thuộc về bất cứ ai khác, vì em chính là duy nhất của anh." />
        </section>

        {/* Section 5: Ảnh xếp chồng nghệ thuật (Artistic Stacked Photos Style) */}
        <section className="relative bg-transparent reveal overflow-hidden pt-10" data-once ref={ref}>
          <section className="relative pb-3">
            <div className="transform !-rotate-12 overflow-hidden ">
              <div className="image-reveal--stagger image-slide-left w-[85%] mx-auto shadow-xl border-[8px] border-e7e6e6 ">
                <img src="/images-min/NGOC1428.JPG" className="w-full object-cover " />
              </div>
            </div>
            <div className="absolute top-1/2 right-3 w-40 z-20 rotate-12 transform" style={{ "--i": 2 } as React.CSSProperties}>
              <div className=" image-reveal--stagger image-slide-right shadow-2xl border-4 border-e7e6e6  ">
                <img src="/images-min/NGOC1512.JPG" className="w-full" />
              </div>
            </div>
            <div className="absolute top-1/4 left-4 transform rotate-90 origin-left z-30 overflow-hidden">
              <div className="fleur-de-leah text-2xl text-[#b14a4a] tracking-widest text-border whitespace-nowrap">
                <TextWave text='"Pure moments, endless love"' />
              </div>
            </div>
            <div className=" absolute bottom-12 right-2 rotate-3 image-fade-scale" style={{ "--i": 6 } as React.CSSProperties}>
              <img src="/images-cut/12311.webp" className="w-32 rounded-bl-3xl animate-pop " />
            </div>
            <div className=" absolute -bottom-16 left-12 -rotate-6 image-fade-scale" style={{ "--i": 8 } as React.CSSProperties}>
              <img src="/images-cut/NGOC0849.png" className="w-32 rounded-bl-3xl animate-jiggle2 " />
            </div>
          </section>
          {/* Section 6: Ảnh với trang trí hoa anh đào (Photo with Cherry Blossom Decoration Style) */}
          <section
            className="py-5 flex flex-col items-center space-y-12 image-reveal--stagger image-slide-up"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <div className="w-4/5 bg-[#e7e6e6] p-4 shadow-sm relative">
              <img src="/images-min/NGOC1517.JPG" className="w-full" />
              <img
                src="https://png.pngtree.com/png-vector/20250920/ourmid/pngtree-delicate-cherry-blossom-branches-png-image_17527540.webp"
                className="absolute -bottom-10 -right-10 w-24 opacity-40 rotate-45"
              />
            </div>
            <div className="max-w-[70%] text-center">
              <p className="text-lg tracking-[0.2em] uppercase text-red-600 font-extrabold mb-2">Since 2026</p>
              <p className="text-xl leading-loose italic dancing-script">"Vì em chính là mảnh ghép cuối cùng mà anh luôn tìm kiếm."</p>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default WeddingLookbook;
