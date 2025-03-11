"use client";

import LoadingScreen from "./components/controlled/LoadingScreen";
import { SideBar } from "./components/SideBar";
import AgencyOverview from "./components/AgencyOverView";
import SmoothScroll from "./components/controlled/SmoothScroll";
import Projects from "./components/Projects";
import { useLoadingStore } from "./store/loadingStore";
import { SmoothScrollingWrapper } from "./components/SmoothScrollingWrapper";
import { useEffect, useState } from "react";
import CustomCursor from "./components/controlled/CustomCursor";
function App() {
  const { isLoading } = useLoadingStore();

  const conditionalRender = isLoading ? (
    <LoadingScreen />
  ) : (
    <SmoothScrollingWrapper />
  );

  return (
    <div className="max-w-8xl mx-auto">
      {<CustomCursor />}
      {<SideBar />}
      {conditionalRender}
    </div>
  );
}

export default App;
