import MusicCard from "../../components/card/MusicCard";

const MusicTypes: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto text-white">
      <h2 className="sm:text-3xl text-xl mt-10 sm:mt-20 text-center">
        A Variety of Music Genres
      </h2>
      <p className="sm:max-w-[45%] max-w-[80%] text-center mx-auto pt-4">
        We offer our listeners a wide variety of music genres, from House and
        Dubstep to Rock and Jazz. Explore music that we have to offer you below.
      </p>
      <div className="pt-12 grid grid-cols-12 place-items-center gap-4">
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="House"
          desc="We pick the best House music for our listeners."
          image="assets/images/musicTools/music1.svg"
        />
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Drum & Bass"
          desc="Enjoy top-notch Liquid D&B and Neurofunk music on our radio."
          image="assets/images/musicTools/music2.svg"
        />
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Dubstep"
          desc="Dozens of new Dubstep tracks are aired regularly on OnWave."
          image="assets/images/musicTools/music3.svg"
        />
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Trance"
          desc="Our DJs broadcast various Trance tracks on OnWave."
          image="assets/images/musicTools/music4.svg"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Breaks"
          desc="Listen to the top-notch Breaks selection on OnWave."
          image="assets/images/musicTools/music5.svg"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Techno"
          desc="Discover all subgenres of legendary Techno on our radio."
          image="assets/images/musicTools/music6.svg"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Rock"
          desc="Weekly concerts and rock exclusives - only on OnWave.."
          image="assets/images/musicTools/music7.svg"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Jazz"
          desc="We pick the best Jazz music for our listeners."
          image="assets/images/musicTools/music8.svg"
        />
      </div>
    </div>
  );
};

export default MusicTypes;
