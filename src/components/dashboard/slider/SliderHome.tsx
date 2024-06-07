import { ImArrowLeft2 } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";

interface SliderHomeProps {
  title: string;
  content: string;
  btnContent: string;
  image: string;
  alt: string;
}

const SliderHome: React.FC<SliderHomeProps> = ({
  title,
  content,
  btnContent,
  image,
  alt,
}) => {
  return (
    <div className="swiper-slide">
      <div className="relative flex flex-col justify-center">
        <img
          className="rounded-md !h-[350px] object-cover swiper-slide opacity-60"
          src={image}
          alt={alt}
        />
        <div className="absolute left-4 sm:left-16 flex flex-col gap-8">
          <h1
            className="sm:text-3xl text-2xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="text-slate-300"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <button className="btn max-h-[50px] w-36 uppercase bg-slate-800 border-0 text-slate-300">
            {btnContent}
          </button>
        </div>

        <div className="sm:flex items-center gap-3 absolute bottom-5 right-14 hidden">
          <ImArrowLeft2
            className="swiper-btn-prev cursor-pointer hover:text-logo-color"
            fontSize={"1.2rem"}
          />
          <ImArrowRight2
            className="swiper-btn-next cursor-pointer hover:text-logo-color"
            fontSize={"1.2rem"}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
