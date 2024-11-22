import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AccordionItem {
  title: string;
  content: string;
}
interface AccordionProps {
  items: AccordionItem[];
  textColor: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, textColor }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  useGSAP(() => {
    const accordionItems =
      document.querySelectorAll<HTMLElement>(".accordion-item");

    if (accordionItems.length > 0) {
      gsap.fromTo(
        accordionItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".accordion-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const toggleAccordion = (index: number) => {
    const isActive = activeIndex === index ? null : index;
    setActiveIndex(isActive);

    const contentElement =
      document.querySelectorAll<HTMLElement>(".accordion-content")[index];
    if (contentElement) {
      const fullHeight = contentElement.scrollHeight; // Get the full height of the content

      if (isActive !== null) {
        gsap.to(contentElement, { height: fullHeight, duration: 0.5 });
      } else {
        gsap.to(contentElement, { height: 0, duration: 0.5 });
      }
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto accordion-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item border-t cursor-pointer ${
            activeIndex === index && "border-red-500"
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div
            className={`flex justify-between items-center px-4 text-lg py-3 ${
              activeIndex === index ? "text-red-500" : `${textColor}`
            }`}
          >
            <p className="font-medium py-2">
              {index + 1}. <span className="ml-10">{item.title}</span>
            </p>
            <span>{activeIndex === index ? "—" : "+"}</span>
          </div>
          <div
            className="accordion-content overflow-hidden h-0"
            style={{ height: 0 }}
          >
            <p className="px-4 py-2 text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default Accordion;
