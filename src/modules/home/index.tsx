import Header from "./Header";
import ListenSection from "./ListenSection";
import MusicTypes from "./MusicTypes";
import ScheduleShow from "./ScheduleShow";
import StartedMusic from "./StartedMusic";

const Index: React.FC = () => {
  return (
    <>
      <Header
        content="Offering the Best Music to Listeners Worldwide"
        isButtonVisible={true}
      />
      <StartedMusic />
      <MusicTypes />
      <ScheduleShow />
      <ListenSection />
    </>
  );
};

export default Index;
