import { RouterProvider } from "react-router-dom";
import "./styles.css";
import { router } from "./routes/router";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";

AOS.init({ duration: 2000 });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
