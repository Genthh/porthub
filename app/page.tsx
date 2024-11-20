"use client";
import LoadingScreen from "./components/controlled/LoadingScreen";
import { SideBar } from "./components/SideBar";
import AgencyOverview from "./components/AgencyOverView";
import SmoothScroll from "./components/controlled/SmoothScroll";
import Projects from "./components/Projects";
import { useLoadingStore } from "./store/loadingStore";
import CustomCursor from "./components/controlled/CustomCursor";
import Process from "./components/Process";

const SmoothScrollingWrapper = () => {
  return (
    <SmoothScroll>
      <div>
        <AgencyOverview />
        <Projects />
        <Process />
        <div className="h-[10vh] ml-80 mx-10  w-full"></div>
      </div>
    </SmoothScroll>
  );
};
function App() {
  const { isLoading } = useLoadingStore();

  const conditioanlRender = isLoading ? (
    <LoadingScreen />
  ) : (
    <SmoothScrollingWrapper />
  );

  return (
    <div className="max-w-8xl mx-auto">
      <CustomCursor />
      <SideBar />

      {conditioanlRender}
    </div>
  );
}

export default App;
