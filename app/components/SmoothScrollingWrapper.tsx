import AgencyOverview from "./AgencyOverView";
import SmoothScroll from "./controlled/SmoothScroll";
import Process from "./Process";
import Projects from "./Projects";
import Reviews from "./Reviews";
import EmailForm from "./EmailForm";

export const SmoothScrollingWrapper = () => {
  return (
    <>
    <div className="hidden lg:block">
    <SmoothScroll>
      <AgencyOverview />
      <Projects />
      <Process />
      <Reviews />
      <EmailForm />
      <div className="h-[1vh] ml-80 mx-10 w-full"></div>
    </SmoothScroll>
    </div>
    <div className="block lg:hidden">
    <SmoothScroll>
      <AgencyOverview />
      <Projects />
      <Process />
      <Reviews />
      <EmailForm />
      <div className="h-[1vh] ml-80 mx-10 w-full"></div>
    </SmoothScroll>
    </div>
    </>
  );
};
