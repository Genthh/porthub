import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animateItems } from "../animations";

gsap.registerPlugin(ScrollTrigger);

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  textColor?: string;
  activeBorderColor?: string;
  borderTopWidth?: string;
  activeTitleColor?: string;
  titleColor?: string;
  contentColor?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  activeBorderColor = "#E34738",
  borderTopWidth = "2px",
  activeTitleColor = "#E34738",
  titleColor = "#ffffff",
  contentColor = "#374151",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(() => {
    animateItems(".accordion-item", ".accordion-container");
  }, []);

  const toggleAccordion = (index: number) => {
    // Toggle the active state
    const isActive = activeIndex === index ? null : index;
    setActiveIndex(isActive);

    // Close the currently opened content (if any)
    const allContentElements =
      document.querySelectorAll<HTMLElement>(".accordion-content");

    // Animate all accordion items to close (height 0)
    allContentElements.forEach((contentElement, i) => {
      if (i !== index) {
        gsap.to(contentElement, {
          height: 0,
          duration: 0.5,
        });
      }
    });

    // Animate the clicked accordion item to open/close
    const contentElement = allContentElements[index];
    if (contentElement) {
      const fullHeight = contentElement.scrollHeight;
      gsap.to(contentElement, {
        height: isActive !== null ? fullHeight : 0,
        duration: 0.5,
      });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto accordion-container">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className="accordion-item border-t cursor-pointer"
            style={{
              borderTopColor: isActive ? activeBorderColor : undefined,
              borderTopWidth: isActive ? borderTopWidth : undefined,
            }}
            onClick={() => toggleAccordion(index)}
          >
            <div
              className="flex justify-between items-center px-4 text-lg py-3"
              style={{
                color: isActive ? activeTitleColor : titleColor,
              }}
            >
              <p className="font-medium py-2 hover-effect">
                {index + 1}. <span className="ml-10">{item.title}</span>
              </p>
              <span className="hover-effect">{isActive ? "—" : "+"}</span>
            </div>

            <div
              className="accordion-content overflow-hidden"
              style={{ height: 0 }}
            >
              <p className="px-4 pb-2" style={{ color: contentColor }}>
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
