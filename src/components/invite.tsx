import dayjs from "dayjs";
import { data } from "../data/data";
import { solarToLunar } from "../utils/amLich";
import { useRevealItems } from "./animation";
import TextSlide from "./animation/textSlide";

const ElegantEventCard = ({
  title,
  time,
  date,
  lunarDate,
  location,
  address,
  primary = false,
  mapLink,
}: {
  title: string;
  time: string;
  date: string;
  lunarDate: string;
  location: string;
  address: string;
  primary?: boolean;
  mapLink?: string;
}) => {
  const ref = useRevealItems<HTMLDivElement>();
  return (
    <div className={`reveal  ${primary ? "slide-right" : "slide-left"}`} ref={ref} data-once>
      <div
        className={` text-center relative overflow-hidden rounded-[40px] py-8 px-4 mb-1 shadow-2xl transition-transform hover:scale-[1.02]
      ${primary ? "bg-[#1a237e] text-white" : "bg-white text-[#1a237e] border border-gray-100"}
    `}
      >
        <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 ${primary ? "bg-white" : "bg-[#c5a059]"} text-center`} />
        <div className="relative z-10 text-center line">
          <h3 className={`text-2xl tracking-[0.3em] font-serif uppercase mb-2 ${!primary && "text-[#c5a059]"}`}>{title}</h3>

          <div className={`w-12 h-[1px] mx-auto mb-4 ${primary ? "bg-white/50" : "bg-[#c5a059]/50"}`} />

          <span
            style={{ ...(primary ? { color: "#52f9f5" } : {}), ...({ "--line": 1 } as React.CSSProperties) }}
            className="text-xs tracking-[0.2em] uppercase mb-4 opacity-80 font-sans text-reveal text-slide-up"
          >
            {time}
          </span>

          <div className={`text-4xl font-serif mb-2 ${primary ? "text-[#e5c07b]" : "text-[#c5a059]"}`} style={{ "--line": 4 } as React.CSSProperties}>
            <TextSlide text={date} />
          </div>

          <span
            style={{ ...(primary ? { color: "#52f9f5" } : {}), ...({ "--line": 6 } as React.CSSProperties) }}
            className="text-[11px] italic mb-8 opacity-70 text-reveal text-slide-up"
          >
            (Tức {lunarDate})
          </span>

          <h4 className="text-xl font-serif font-bold tracking-wide mb-3 leading-snug" style={{ "--line": 6 } as React.CSSProperties}>
            <TextSlide text={location} />
          </h4>

          <span
            style={{ ...(primary ? { color: "#52f9f5" } : {}), ...({ "--line": 10 } as React.CSSProperties) }}
            className="text-[13px] mb-8 font-sans opacity-80 max-w-[220px] mx-auto leading-relaxed text-reveal text-slide-up"
          >
            {address}
          </span>
        </div>
        <a
          href={mapLink}
          target="_blank"
          className={`
          px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg transition-all
          ${primary ? "bg-[#c5a059] text-white hover:bg-[#b38f48]" : "bg-[#1a237e] text-white hover:bg-[#283593]"}
        `}
        >
          Xem chỉ đường
        </a>
        {primary ? (
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2M2czkwZDdrbDRmMm0xeW13ZGFkbzRsd2gwcHJ2ejZpdGx5enBjZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/nHK9riZvdOsv6zsTfc/giphy.gif"
            className="absolute top-20 left-0  w-20 pointer-events-none"
            alt="decoration"
          />
        ) : (
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2M2czkwZDdrbDRmMm0xeW13ZGFkbzRsd2gwcHJ2ejZpdGx5enBjZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/wZIDXgydcylPZdncKy/giphy.gif"
            className="absolute top-20 right-0  w-20 pointer-events-none"
            alt="decoration"
          />
        )}
      </div>
    </div>
  );
};

const WeddingLuxuryDesign = () => {
  const ref = useRevealItems<HTMLDivElement>();
  const { crAddress, cdAddress, crInvite, cdInvite, restaurant } = data;
  const weddingDate = dayjs(crInvite);
  const cdWeddingDate = dayjs(cdInvite);
  const crlunar = solarToLunar(weddingDate.date(), weddingDate.month() + 1, weddingDate.year());
  const cdlunar = solarToLunar(cdWeddingDate.date(), cdWeddingDate.month() + 1, cdWeddingDate.year());
  return (
    <section className="relative min-h-screen bg-transparent py-12 px-6 font-serif ">
      <div className="bg-flower-line !-top-10 left-0" />
      <div className="bg-flower-line left-0" />
      <div className="max-w-md mx-auto overflow-hidden p-2">
        <div className="">
          <ElegantEventCard
            title="Tiệc Cưới Nhà Gái"
            time={dayjs(cdInvite).format("dddd - HH : mm")}
            date={dayjs(cdInvite).format("DD . MM . YYYY")}
            location="Tại Tư Gia"
            address={cdAddress}
            lunarDate={`Ngày ${cdlunar.day} tháng ${cdlunar.month} năm Ất Tỵ`}
            primary={true}
            mapLink="https://www.google.com/maps/place/B%C3%A1c+B%C3%A1/@10.638025,106.6444339,2024m/data=!3m1!1e3!4m10!1m2!2m1!1zYsOhYyBiw6E!3m6!1s0x317531003dc482c7:0x4b5354193381d2d9!8m2!3d10.638025!4d106.6539611!15sCghiw6FjIGLDoZIBBmdhcmRlbuABAA!16s%2Fg%2F11ysyq7bwb?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
          />
          <div
            className="relative h-64 flex flex-col justify-between bg-transparent text-center bg-center bg-no-repeat bg-cover rreveal sscale-in -my-4"
            style={{ backgroundImage: "url('/images/a37d1bf5-51e9-4ea1-99e4-d31aae4e9be7.png')" }}
            ref={ref}
            data-once
          ></div>

          <ElegantEventCard
            lunarDate={`Ngày ${crlunar.day} tháng ${crlunar.month} năm Ất Tỵ`}
            title="Tiệc Cưới Nhà Trai"
            time={dayjs(crInvite).format("dddd - HH : mm")}
            date={dayjs(crInvite).format("DD . MM . YYYY")}
            location={restaurant}
            address={crAddress}
            primary={false}
            mapLink="https://www.google.com/maps/place/Venus+Luxury/@10.8057162,106.6261755,1011m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31752bd46f658857:0x227ecfc8312d0652!8m2!3d10.8057109!4d106.6287504!16s%2Fg%2F11vwv1305t?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingLuxuryDesign;
