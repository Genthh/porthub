export const ProjectCard: React.FC<{
  image: string;
  className?: string;
  onHover: (hoverState: boolean) => void;
  isHovered: boolean;
  onClick?: () => void;
}> = ({ image, className = "", onHover, isHovered, onClick }) => (
  <div
    className={`project-card relative bg-gray-200 rounded-xl overflow-hidden hover-effect ${className}`}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
    onClick={onClick}
  >
    <ProjectCategories isHovered={isHovered} />
  </div>
);

const ProjectCategories: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const categories = ["Branding", "UI/UX", "Motion"];
  return (
    <div
      className={`absolute bottom-2 left-2 flex flex-wrap items-center justify-center duration-300 ${
        isHovered ? "opacity-100 z-50" : "opacity-0"
      }`}
    >
      {categories.map((category, index) => (
        <p
          key={index}
          className="text-black bg-white rounded-full text-lg px-3 mx-1 hover:bg-customRed hover:cursor-pointer duration-150 hover:text-white"
        >
          {category}
        </p>
      ))}
    </div>
  );
};
