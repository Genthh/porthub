import { useEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { startLoadingAnimation } from "./animations";
import { useLoadingStore } from "../store/loadingStore";

export default function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}): JSX.Element {
  const textRef = useRef<HTMLDivElement | null>(
    null
  ) as MutableRefObject<HTMLDivElement | null>;
  const { setLoadingCompleted } = useLoadingStore();
  useEffect(() => {
    if (textRef.current) {
      startLoadingAnimation(textRef.current, () => {
        setLoadingCompleted(true);
        onLoadingComplete();
      });
    }
  }, [onLoadingComplete, setLoadingCompleted]);

  const splitText = "Loading".split("").map((char, index) => (
    <span className="md:mr-10 " key={index}>
      {char}
    </span>
  ));

  return (
    <div className="fixed inset-0 z-50 bg-primary flex justify-center items-center screen">
      <div className="text-4xl text-center font-bold text-white " ref={textRef}>
        {splitText}
      </div>
    </div>
  );
}
