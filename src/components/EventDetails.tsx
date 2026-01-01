// import SlideInOut from "./motion";

const WeddingTimeline = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 font-serif text-center text-[#2d2d2d]">
      {/* Lễ Vu Quy */}
      <section className="mb-1">
        <h2 className="text-2xl tracking-[0.2em] mb-1">❤️ LỄ VU QUY</h2>
        <p className="text-sm mb-4">VÀO CHỦ NHẬT - 09H00</p>

        <div className="flex justify-center items-center gap-4 text-3xl mb-2">
          <span>Tháng 12</span>
          <div className="w-[1px] h-10 bg-black"></div>
          <span className="text-5xl text-[#8b1a1a] font-bold">21</span>
          <div className="w-[1px] h-10 bg-black"></div>
          <span>2025</span>
        </div>

        <p className="text-xs italic text-gray-500 mb-2">Tức Ngày 16 tháng 10 năm Ất Tỵ</p>
        <p className="font-bold tracking-widest border-b border-gray-400 inline-block pb-1">TẠI TƯ GIA NHÀ GÁI</p>
      </section>

      <div
        className="relative h-64 my-3 flex flex-col justify-between bg-[#c2e6f698] text-center bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/a37d1bf5-51e9-4ea1-99e4-d31aae4e9be7.png')" }}
      >
        <div className=" top-0 right-4 text-right">
          <button className="bg-[#4a0e0e] text-white text-[10px] px-3 py-1 rounded-full uppercase">Chỉ đường</button>
        </div>
        <div className=" bottom-0 left-4 text-left">
          <button className="bg-[#4a0e0e] text-white text-[10px] px-3 py-1 rounded-full uppercase">Chỉ đường</button>
        </div>
      </div>

      {/* Lễ Thành Hôn */}
      <section className="mt-1">
        <h2 className="text-2xl tracking-[0.2em] mb-1">LỄ THÀNH HÔN</h2>
        <p className="text-sm mb-4">VÀO CHỦ NHẬT - 14H00</p>
        <div className="flex justify-center items-center gap-4 text-3xl mb-4">
          <span>Tháng 12</span>
          <div className="w-[1px] h-10 bg-black"></div>
          <span className="text-5xl text-[#8b1a1a] font-bold">21</span>
          <div className="w-[1px] h-10 bg-black"></div>
          <span>2025</span>
        </div>
        <p className="font-bold tracking-widest border-b border-gray-400 inline-block pb-1">TẠI TƯ GIA NHÀ TRAI</p>
      </section>
    </div>
  );
};
export default WeddingTimeline;
