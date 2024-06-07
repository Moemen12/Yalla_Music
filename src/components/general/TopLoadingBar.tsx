import { useEffect, useRef } from "react";
import { useNavigation } from "react-router";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

const TopLoadingBar: React.FC = () => {
  const loadingBar = useRef<LoadingBarRef | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      loadingBar.current?.continuousStart();
    } else {
      loadingBar.current?.complete();
    }
  }, [navigation.state]);
  return <LoadingBar className="bg-special-btn" ref={loadingBar} />;
};

export default TopLoadingBar;
