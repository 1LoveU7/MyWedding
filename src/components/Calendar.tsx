import dayjs, { Dayjs } from "dayjs";
import { data } from "../data/data";
import { solarToLunar } from "../utils/amLich";
import { useRevealItems } from "./animation";
import TextSlide from "./animation/textSlide";

const WeddingCalendar = () => {
  const { date, crInvite } = data;
  const weddingDate = dayjs(date);
  const crWeddingDate = dayjs(crInvite);

  const year = weddingDate.year();
  const month = weddingDate.month();
  const weddingDay = weddingDate.date();

  const firstDayOfMonth = weddingDate.startOf("month");
  const daysInMonth = firstDayOfMonth.daysInMonth();
  const startDay = (firstDayOfMonth.day() + 6) % 7;

  const lunar = (day: Dayjs) => solarToLunar(day.date(), day.month() + 1, day.year());
  const ref = useRevealItems<HTMLDivElement>();
  return (
    <section className="bg-transparent pt-10 flex justify-center mb-7">
      <div className="relative w-full bg-transparent shadow-lg rounded-xl overflow-hidden">
        {/* IMAGE SECTION */}
        <div className="relative px-1 reveal slide-left" ref={ref} data-once>
          <img className="absolute w-40 h-40 -bottom-8 -left-1 opacity-[0.9] object-fill z-30" src="/images/btim.png" />
          <div className="w-full relative overflow-hidden flex ">
            <div className="w-[80%] relative pt-3 pl-2">
              <img
                src="/images-min/NGOC1503.JPG"
                className="w-full h-[420px] object-cover rounded-l-xl border-s-3 border-[#c1c0f7] border-4 border-solid"
                alt=""
              />
            </div>
            <div className="">
              <div
                className="cherry-bomb-one-regular text-[32px] tracking-[0.45em] text-blue-600 rotate-360 pt-2"
                style={{ writingMode: "vertical-rl" }}
              >
                <TextSlide text="I LOVE U" />
              </div>
            </div>
          </div>
          {/* Oval image */}
          <div className="absolute right-4 bottom-[-60px] scale-in">
            <div className="w-[160px] h-[220px] bg-white rounded-l-2xl p-2 shadow-xl">
              <img className="absolute w-32 h-32 -top-4 -left-4 opacity-[0.9] object-fill" src="/images/im.webp" />
              <img src="/images-min/NGOC1333.JPG" className="w-full h-full object-cover rounded-l-2xl" alt="" />
            </div>
          </div>
        </div>
        {/* SAVE THE DATE */}
        <div className="pt-2 px-6 ml-6 reveal slide-up text-left z-30" ref={ref} data-once>
          <div className="mea-culpa-regular text-5xl text-blue-500 italic -rotate-6 leading-none inline-block">
            <TextSlide text="Save the Date" />
          </div>
        </div>
        {/* CALENDAR */}
        <div className="px-6 pb-6 mt-4 reveal scale-in" ref={ref} data-once>
          <div className="relative border border-blue-700 p-4">
            <div className="absolute left-0 top-1/4 bottom-1/4 w-[4px] bg-blue-700" />

            <div className="flex justify-between text-[darkblue] mb-2">
              <span className="text-3xl font-light">{month + 1}</span>
              <span className="text-xl font-light">{year}</span>
            </div>

            <div className="grid grid-cols-7 text-[10px] mb-2 border-b border-[#F2B5B5]/40">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                <div key={d} className="text-center text-gray-500">
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-3">
              {Array.from({ length: startDay }).map((_, i) => (
                <div key={i} />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const isWeddingDay = day === weddingDay || day === crWeddingDate.date();

                return (
                  <div key={day} className="relative h-9 flex flex-col items-center">
                    {isWeddingDay && (
                      <img
                        src="https://media.giphy.com/media/PDeChFlFgvJUgVF9Hr/giphy.gif"
                        className="absolute w-[300%] h-[200%] opacity-70 -mt-[50%]"
                        alt=""
                      />
                    )}
                    <span className={`relative z-10 text-sm ${isWeddingDay ? "text-[#C05E4E] font-semibold" : "text-gray-600"}`}>{day}</span>
                    {isWeddingDay && (
                      <span className="text-[9px] text-gray-400">
                        {String(lunar(day === weddingDay ? weddingDate : crWeddingDate).day).padStart(2, "0")}/
                        {lunar(day === weddingDay ? weddingDate : crWeddingDate).month}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-4 text-[10px] tracking-[0.2em] text-gray-400 uppercase"></div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCalendar;
