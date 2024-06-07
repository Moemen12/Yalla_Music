import { ImArrowRight2 } from "react-icons/im";
import { LuTicket } from "react-icons/lu";
import { Link } from "react-router-dom";
const Events: React.FC = () => {
  return (
    <section className="mt-14">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium">Upcoming Events</h2>
        <Link
          to={"/dashboard/events"}
          className="flex items-center hover:text-logo-color gap-2 pr-4"
        >
          <p className="cursor-pointer">See all</p>
          <ImArrowRight2 />
        </Link>
      </div>

      <div className="grid grid-cols-1 place-items-center sm:place-items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 sm:gap-20">
        <div className="h-80 w-80 md:w-auto rounded-2xl relative">
          <div className="absolute z-10 text-white flex flex-col left-4 h-full w-full justify-evenly">
            <button className="flex items-center font-medium btn w-32 flex-nowrap !h-10 !min-h-10 p-0 bg-slate-800 border-0 text-white hover:bg-special-btn ticket-btn">
              <LuTicket className="text-logo-color" fontSize={"1.5rem"} />
              <b> Buy ticket</b>
            </button>
            <div className="flex flex-col">
              <p>March 31, 2021</p>
              <p className="text-slate-200">6:40 pm</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-medium">Rocky Pub</p>
              <p>514 S. Magnolia St. Orlando, FL 32806</p>
            </div>
          </div>
          <img
            className="w-full h-full rounded-2xl object-cover opacity-70"
            src="/assets/images/events/event1.jpg"
            alt=""
          />
        </div>
        <div className="h-80 w-80 md:w-auto rounded-2xl relative">
          <div className="absolute z-10 text-white flex flex-col left-4 h-full w-full justify-evenly">
            <button className="flex items-center font-medium btn w-32 flex-nowrap !h-10 !min-h-10 p-0 bg-slate-800 border-0 text-white hover:bg-special-btn ticket-btn">
              <LuTicket className="text-logo-color" fontSize={"1.5rem"} />
              <b> Buy ticket</b>
            </button>
            <div className="flex flex-col">
              <p>March 31, 2021</p>
              <p className="text-slate-200">6:40 pm</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-medium">Rocky Pub</p>
              <p>514 S. Magnolia St. Orlando, FL 32806</p>
            </div>
          </div>
          <img
            className="w-full h-full rounded-2xl object-cover opacity-70"
            src="/assets/images/events/event2.jpg"
            alt=""
          />
        </div>
        <div className="h-80 w-80 md:w-auto rounded-2xl relative">
          <div className="absolute z-10 text-white flex flex-col left-4 h-full w-full justify-evenly">
            <button className="flex items-center font-medium btn w-32 flex-nowrap !h-10 !min-h-10 p-0 border-0 text-white bg-special-btn hover:bg-special-btn">
              <LuTicket className="text-white" fontSize={"1.5rem"} />
              <b>Sold out</b>
            </button>
            <div className="flex flex-col">
              <p>March 31, 2021</p>
              <p className="text-slate-200">6:40 pm</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-medium">Rocky Pub</p>
              <p>514 S. Magnolia St. Orlando, FL 32806</p>
            </div>
          </div>
          <img
            className="w-full h-full rounded-2xl object-cover opacity-70"
            src="/assets/images/events/event3.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
