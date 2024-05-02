import MusicCard from "../../components/card/MusicCard";

const MusicTypes: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="sm:text-3xl text-xl text-black mt-10 sm:mt-20 text-center">
        A Variety of Music Genres
      </h2>
      <p className="sm:max-w-[45%] text-black max-w-[80%] text-center mx-auto pt-4">
        We offer our listeners a wide variety of music genres, from House and
        Dubstep to Rock and Jazz. Explore music that we have to offer you below.
      </p>
      <div className="pt-12 grid grid-cols-12 place-items-center gap-4">
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="House"
          desc="We pick the best House music for our listeners."
          image="assets/images/musicTools/music1.png"
        />
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Drum & Bass"
          desc="Enjoy top-notch Liquid D&B and Neurofunk music on our radio."
          image="assets/images/musicTools/music2.png"
        />
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Dubstep"
          desc="Dozens of new Dubstep tracks are aired regularly on OnWave."
          image="assets/images/musicTools/music3.png"
        />
        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Trance"
          desc="Our DJs broadcast various Trance tracks on OnWave."
          image="assets/images/musicTools/music4.png"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Breaks"
          desc="Listen to the top-notch Breaks selection on OnWave."
          image="assets/images/musicTools/music5.png"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Techno"
          desc="Discover all subgenres of legendary Techno on our radio."
          image="assets/images/musicTools/music6.png"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Rock"
          desc="Weekly concerts and rock exclusives - only on OnWave.."
          image="assets/images/musicTools/music7.png"
        />

        <MusicCard
          className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
          title="Jazz"
          desc="We pick the best Jazz music for our listeners."
          image="assets/images/musicTools/music8.png"
        />
      </div>
    </div>
  );
};

export default MusicTypes;
