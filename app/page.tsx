"use client";
import LoadingScreen from "./components/LoadingScreen";
import { SideBar } from "./components/SideBar";
import AgencyOverview from "./components/AgencyOverView";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Projects from "./components/Projects";
import { useLoadingStore } from "./store/loadingStore";
import CustomCursor from "./components/CustomCuror";

const SmoothScrollingWrapper = () => {
  return (
    <SmoothScroll>
      <AgencyOverview />
      <Projects />
    </SmoothScroll>
  );
};
function App() {
  const { isLoading, setLoading } = useLoadingStore();

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const conditioanlRender = isLoading ? (
    <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  ) : (
    <SmoothScrollingWrapper />
  );

  return (
    <div className="max-w-8xl mx-auto">
      {/* <CustomCursor /> */}

      {/* <div className="hover-effect"> */}
      <SideBar />
      {/* </div> */}
      {conditioanlRender}

      {/* <div className="h-screen">hej</div> */}
    </div>
  );
}

export default App;
