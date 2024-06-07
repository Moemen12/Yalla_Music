import Breadcrumb from "../../components/dashboard/breadcrumbs/Breadcrumb";
import { Autoplay, Navigation } from "swiper/modules";
import { BiSolidDashboard } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { useGetUserInfoQuery } from "../../services/user.service";
import Swiper from "swiper";
import SliderHome from "../../components/dashboard/slider/SliderHome";
import Realease from "./home/Realease";
import Events from "./home/Events";

const Index: React.FC = () => {
  const items = [
    { icon: BiSolidDashboard, text: "dashboard", href: "/dashboard" },
    { icon: TiHome, text: "home", href: "/dashboard" },
  ];
  const { data: user, isLoading, isError, refetch } = useGetUserInfoQuery({});

  new Swiper(".homeSwiper", {
    modules: [Navigation, Autoplay],

    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },

    loop: true,

    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });

  return (
    <main className="text-white sm:p-12 p-3 !pb-0 !pt-2">
      <Breadcrumb items={items} />
      <div className="overflow-y-scroll hidden-scroll main-height-mobile">
        {/* <h2 className="font-bold text-2xl mb-4">
          Good {timeOfDay}, {user?.username}
        </h2> */}

        <div className="swiper homeSwiper">
          <div className="swiper-wrapper">
            <SliderHome
              title="Record Label & Music <br /> streaming"
              content="There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humour, or randomised words which don't <br /> look even slightly believable"
              btnContent="learn more"
              alt="home-slider-1"
              image="/assets/images/sliders/slider1.jpg"
            />
            <SliderHome
              title="Metallica and Slipknot feature in trailer for <br/> ‘Long Live Rock’ documentary"
              content="It also features Rage Against The Machine,Roses  number of others"
              btnContent="learn more"
              alt="home-slider-2"
              image="/assets/images/sliders/slider2.jpg"
            />
            <SliderHome
              title="New Artist of Our Label"
              content="There are many variations of passages of Lorem Ipsum available, but the majority have <br/>suffered alteration in some form, by injected humour, or randomised words which don't <br/> look even slightly believable"
              btnContent="learn more"
              alt="home-slider-3"
              image="/assets/images/sliders/slider3.jpg"
            />
          </div>

          <div className="swiper-pagination-home !w-fit sm:w-full mx-auto"></div>
        </div>

        <Realease />
        <Events />
      </div>
    </main>
  );
};

export default Index;
