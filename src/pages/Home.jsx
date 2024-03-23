import Slider from "../Components/Slider";
import About from "../Components/About";
import Department from "../Components/Department";
import Gallery from "../Components/Gallery";
import Startup from "../Components/Startup";
import Team from "../Components/Team";
import AppointmentForm from "../Components/AppointmentForm";
import Blog from "../Components/Blog";
export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Department />
      <Gallery />
      <Startup />
      <Team />
      <AppointmentForm />
      <Blog />
    </div>
  );
}
