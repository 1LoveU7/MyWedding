import Hero from "./components/Hero";
import Countdown from "./components/CountDown";
// import EventDetails from "./components/EventDetails";
// import LoveStory from "./components/LoveStory";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSPV";
import Footer from "./components/Footer";
import WeddingStory from "./components/MainDetail";
import TimelineDresscode from "./components/TimeLine";
import WeddingCalendar from "./components/Calendar";
import WeddingParty from "./components/invite";
import StartWedding from "./components/start";

function App() {
  const queryString = window.location.search.replace("?", "");
  if (!queryString)
    return (
      <div
        className="min-h-screen bg-white max-w-[430px] bg-center bg-no-repeat bg-cover bg-fixed"
        style={{ margin: "0 auto", backgroundImage: "url('/images/91b77540-6c0a-44b6-a59e-c32bd2f4e8cd.webp')" }}
      >
        <StartWedding />
      </div>
    );
  return (
    <div
      className="min-h-screen bg-white max-w-[430px] bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ margin: "0 auto", backgroundImage: "url('/images/91b77540-6c0a-44b6-a59e-c32bd2f4e8cd.webp')" }}
    >
      {/* <img src="" className="z-5 w-full h-full fixed" /> */}
      <Hero />
      <Countdown />
      <WeddingStory />
      <WeddingParty />
      <WeddingCalendar />
      <RSVP client={decodeURIComponent(queryString)} />
      <TimelineDresscode />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
