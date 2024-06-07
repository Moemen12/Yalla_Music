import NavigateBtn from "../../components/buttons/NavigateBtn";

const ScheduleShow: React.FC = () => {
  return (
    <div className="pb-12 bg-main-back text-white">
      <div className="lg:w-[80%] w-[90%] mx-auto">
        <h2 className="sm:text-3xl text-xl text-white mt-10 sm:mt-20 text-center pt-12 sm:pt-24">
          Schedule of Radio Shows
        </h2>
        <p className="sm:max-w-[60%] text-white max-w-[90%] text-center mx-auto pt-4">
          Our radio has more than 20 radio shows aired weekly. They include
          exclusive guest mixes,live performances, interviews, and appearances
          by world-famous DJs and musicians
        </p>
        <div className="pt-12 grid grid-cols-12 place-items-center gap-4 pb-2 sm:space-y-0 space-y-3">
          <div className="col-span-12 sm:col-span-6 relative md:col-span-4 bg-card-color shadow-2xl sm:rounded-md">
            <div className="flex items-center justify-around py-3">
              <p>
                by <span className="text-special">Leona Burns</span>
              </p>
              <p>07:00am - 10:00am</p>
            </div>
            <img src="assets/images/test/test1.jpg" loading="lazy" alt="" />
            <div className="p-6">
              <a
                className="list-none inline-block audio-displayer text-white px-2"
                href="/ss"
              >
                <li>Program</li>
              </a>
              <p className="text-special text-base pt-2">
                OnWave Morning Time with Leona Burns
              </p>
              <p className="text-white pt-2">
                Leona Burns is ready to charge up your morning with great EDM &
                Rock music! Tune in to OnWave to get your dose of morning fun
                with trending hits and the latest news.
              </p>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-card-color shadow-2xl sm:rounded-md">
            <div className="flex items-center justify-around py-3">
              <p>
                by <span className="text-special">Moemen saade</span>
              </p>
              <p>01:00am - 12:50am</p>
            </div>
            <img src="assets/images/test/test3.jpg" loading="lazy" alt="" />
            <div className="p-6">
              <div className="flex gap-2">
                <a
                  className="list-none inline-block audio-displayer text-white px-2"
                  href="/ss"
                >
                  <li>Interview</li>
                </a>

                <a
                  className="list-none inline-block audio-displayer text-white px-2"
                  href="/ss"
                >
                  <li>Program</li>
                </a>
              </div>

              <p className="text-special text-base pt-2">
                OnWave Morning Time with Leona Burns
              </p>
              <p className="text-white pt-2">
                Leona Burns is ready to charge up your morning with great EDM &
                Rock music! Tune in to OnWave to get your dose of morning fun
                with trending hits and the latest news.
              </p>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-card-color shadow-2xl sm:rounded-md">
            <div className="flex items-center justify-around py-3">
              <p>
                by <span className="text-special">Leona Burns</span>
              </p>
              <p>07:00am - 10:00am</p>
            </div>
            <img src="assets/images/test/test2.jpg" loading="lazy" alt="" />
            <div className="p-6">
              <a
                className="list-none inline-block audio-displayer text-white px-2"
                href="/ss"
              >
                <li>Program</li>
              </a>
              <p className="text-special text-base pt-2">
                OnWave Morning Time with Leona Burns
              </p>
              <p className="text-white pt-2">
                Leona Burns is ready to charge up your morning with great EDM &
                Rock music! Tune in to OnWave to get your dose of morning fun
                with trending hits and the latest news.
              </p>
            </div>
          </div>
        </div>
        <NavigateBtn
          text="view all schedule"
          className="px-6 py-2 sm:px-6 !text-base sm:!py-1 block mx-auto"
        />
      </div>
    </div>
  );
};

export default ScheduleShow;
