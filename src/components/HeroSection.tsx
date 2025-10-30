import HeroAcions from "./HeroAcions";
import HeroOffers from "./HeroOffers";
import HeroText from "./HeroText";
import TopAnnouncementBanner from "./TopAnnouncementBanner";
import TrustPilotReviews from "./TrustPilotReviews";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[url('/upon-life-main-banner.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
      <TopAnnouncementBanner />

      <div className="flex flex-col items-center">
        <TrustPilotReviews />
        <HeroText />
        <HeroAcions />
        <HeroOffers />
      </div>
    </section>
  );
};

export default HeroSection;
