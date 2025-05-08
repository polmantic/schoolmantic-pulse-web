
import ApplicationSupport from "@/components/ApplicationSupport";
import BillingInfo from "@/components/BillingInfo";
import Contact from "@/components/Contact";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import SimpleInstallation from "@/components/SimpleInstallation";
import TryFirst from "@/components/TryFirst";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimationObserver />
      <Navbar />
      <Hero />
      <Overview />
      <SimpleInstallation />
      <ApplicationSupport />
      <TryFirst />
      <BillingInfo />
      <FAQ />
      <Demo />
      <Contact />
    </div>
  );
};

export default Index;
