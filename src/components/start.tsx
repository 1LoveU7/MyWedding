import { useState } from "react";

// src/pages/Invitation.tsx
export default function Invitation() {
  const [name, setName] = useState("");
  const [callName, setCallName] = useState("Bạn");
  const onSubmit = () => {
    if (name.trim() === "" && callName.trim() === "") {
      alert("Vui lòng nhập tên của bạn.");
      return;
    }
    document.location.href = `/?${encodeURIComponent(callName.trim())}?${encodeURIComponent(name.trim())}`;
  };
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex justify-center py-10">
      <div className="relative w-[390px] bg-white shadow-xl rounded-md overflow-hidden">
        {/* ===== Floral left ===== */}
        <img
          src="https://img.cinelove.me/templates/assets/77a0f81e-67af-4f30-91b6-73c5e5ce6aea/bd7bf8f4-643f-47c8-995f-3bd8ce3235d1.png"
          className="absolute top-20 left-0 w-28"
        />

        {/* ===== Floral right ===== */}
        <img src="https://assets.cinelove.me/resources/bouquet/unri8axa4zmlj5408kc4ko.png" className="absolute bottom-36 right-0 w-28" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 px-6 text-center text-[#222]">
          {/* Title */}
          <h1 className="font-[Allura] text-4xl mt-12 mb-6 tracking-wide">Wedding Invitation</h1>
          <p className="uppercase tracking-[0.25em] text-sm text-[#444] mb-10">Trân Trọng Kính Mời</p>

          {/* ===== Envelope ===== */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              {/* Shadow (fake) */}
              <div className=" envelope-shadow absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-7 bg-black/40 blur-sm rounded-full" />

              {/* Envelope image */}
              <img
                src="/images/e8c87a48-13bd-4a7b-8210-dda6162aa8ec.png"
                className="envelope-float relative z-10 w-64 rounded-lg drop-shadow-[0_25px_45px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:-translate-y-2"
              />
            </div>
          </div>

          {/* ===== Divider text ===== */}
          <div className="px-5">
            <label className="font-[Cormorant_Garamond] text-base leading-7 mb-2">Vui Lòng Cho Biết Tên Của Quý Khách:</label>
            <div className="mt-2 flex h-min mb-10">
              <select
                onChange={(e) => setCallName(e.target.value)}
                className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c5b08a]"
              >
                <option>Bạn</option>
                <option>Vc</option>
                <option>Gia Đình</option>
                <option>Ông</option>
                <option>Bà</option>
                <option>Anh</option>
                <option>Chị</option>
                <option>Em</option>
              </select>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c5b08a]"
                placeholder="Nhập tên của bạn"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSubmit();
                  }
                }}
              />
            </div>
            {name.trim() && callName.trim() && (
              <button
                onClick={onSubmit}
                className="w-full bg-[#c5b08a] text-white font-semibold py-2 rounded-md hover:bg-[#b39d6d] transition-colors"
              >
                Xác Nhận
              </button>
            )}
          </div>
          {/* ===== Invitation text ===== */}
          <p className="font-[Cormorant_Garamond] text-base leading-7 mb-6">
            Đến dự buổi tiệc chung vui <br />
            cùng gia đình chúng tôi
          </p>
        </div>
      </div>
    </div>
  );
}
