"use client";
import LoadingScreen from "./components/controlled/LoadingScreen";
import { SideBar } from "./components/SideBar";
import AgencyOverview from "./components/AgencyOverView";
import SmoothScroll from "./components/controlled/SmoothScroll";
import Projects from "./components/Projects";
import { useLoadingStore } from "./store/loadingStore";
import CustomCursor from "./components/controlled/CustomCursor";
import Process from "./components/Process";
import EmailForm from "./components/EmailForm";
import Reviews from "./components/Reviews";

import { useEffect, useState } from "react";

const SmoothScrollingWrapper = () => {
  return (
    <SmoothScroll>
      <AgencyOverview />
      <Projects />
      <Process />
      <Reviews />
      <EmailForm />
      <div className="h-[1vh] ml-80 mx-10  w-full"></div>
    </SmoothScroll>
  );
};

function App() {
  const { isLoading } = useLoadingStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const conditioanlRender =
    isLoading && isClient ? <LoadingScreen /> : <SmoothScrollingWrapper />;

  return (
    <div className="max-w-8xl mx-auto">
      <CustomCursor />
      <SideBar />
      {conditioanlRender}
    </div>
  );
}

export default App;
