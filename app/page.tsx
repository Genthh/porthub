"use client";
import LoadingScreen from "./components/LoadingScreen";
import { SideBar } from "./components/SideBar";
import AgencyOverview from "./components/AgencyOverView";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import { Projects } from "./components/Projects";
import { useLoadingStore } from "./store/loadingStore";

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
      <SideBar />

      {conditioanlRender}
    </div>
  );
}

export default App;
