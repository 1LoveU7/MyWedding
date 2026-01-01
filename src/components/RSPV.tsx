import { data } from "../data/data";
import { useRevealItems } from "./animation";

export default function RSVP({ client }: { client?: string }) {
  const reveal = useRevealItems<HTMLDivElement>();
  const { cd, cr } = data;
  return (
    <section className="relative flex w-full bg-transparent text-center justify-center reveal pt-5 mb-2 " ref={reveal} data-once>
      <div className="bg-flower-line !-top-[15%]" />
      <div
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20250103/original/pngtree-new-wedding-background-wall-hd-pictures-picture-image_15595255.jpg')",
        }}
        className="
          
          image-reveal--stagger image-slide-up
          bg-cover bg-bottom bg-no-repeat
          rounded-[28px]
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          overflow-hidden
          border-[3px] border-[#e7d9b7]
           -bottom-28 p-2 bg-white w-11/12 pt-16
        "
      >
        <img className="absolute top-4 right-4 w-16 h-16 rotate-12 pointer-events-none z-40" src="/images/pngegg.png" />
        <img className="absolute bottom-0 left-0 w-full" src="/images/red.png" />
        <img className="absolute rotate-90 bottom-0 left-0 w-full" src="/images/red.png" />
        {/* ===== Overlay mờ ===== */}
        <div className="absolute inset-4 bg-white/70 backdrop-blur-md rounded-[22px]"></div>

        {/* ===== Viền trong (luxury) ===== */}
        <div className="absolute inset-4 rounded-[22px] border border-[#c8b27c]/60 pointer-events-none"></div>

        {/* ================== CONTENT ================== */}
        <div className="relative px-2 py-4 text-center z-40">
          <h3 className="cherry-bomb-one-regular text-xl tracking-wide mb-4 z-30">Thiệp Mời Cưới</h3>

          <div className="flex items-center justify-center gap-3 pb-6 mea-culpa-regular">
            <span className="text-2xl italic w-full text-right">{cr}</span>

            <span className="text-[#4A6FA5] text-sm">&</span>

            <span className="text-2xl italic w-full text-left">{cd}</span>
          </div>

          <h2 className="text-lg allura-regular mb-1">Trân trọng kính mời</h2>

          <h2 className="text-red-600 dancing-script text-2xl md:text-3xl mt-2">{client}</h2>

          <p className="text-sm italic opacity-80">Đến tham dự lễ thành hôn của chúng tôi</p>
        </div>
      </div>
      <img className="absolute -top-5 left-24 w-1/2 h-2/6 z-10" src="/images/redribbon.png" />
    </section>
  );
}
