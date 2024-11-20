import { useState } from "react";
import { gsap } from "gsap";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    const isActive = activeIndex === index ? null : index;
    setActiveIndex(isActive);

    const contentElement =
      document.querySelectorAll<HTMLElement>(".accordion-content")[index];
    if (contentElement) {
      const fullHeight = contentElement.scrollHeight; // Get the full height of the content

      if (isActive !== null) {
        gsap.to(contentElement, { height: fullHeight, duration: 0.3 });
      } else {
        gsap.to(contentElement, { height: 0, duration: 0.3 });
      }
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-t cursor-pointer ${
            activeIndex === index && "border-red-500"
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div
            className={`flex justify-between items-center px-4 text-lg py-3 ${
              activeIndex === index ? "text-red-500" : "text-black"
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
      ))}
    </div>
  );
};

export default Accordion;
