import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Specialists from "@/components/Specialists";
import Testimonials from "@/components/Testimonials";
import PricePlan from "@/components/PricePlan";
import Appointment from "@/components/Appointment";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <Main />
      <Introduction />
      <Services />
      <Contact />
      <Specialists />
      <Testimonials />
      <PricePlan />
      <Appointment />
      <Blog />
      <Clients />
      <Work />
      <Footer />
    </div>
  );
}
