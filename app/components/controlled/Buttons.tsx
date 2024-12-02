export const Button = ({
  label,
  color,
  rotation,
  bottom,
  left,
  right,
  zIndex = "z-10",
}: {
  label: string;
  color: string;
  rotation: string;
  bottom: string;
  left?: string;
  right?: string;
  zIndex?: string;
}) => (
  <button
    className={`${color} text-base absolute px-4 py-1  w-auto rounded-full shadow-md ${rotation} ${bottom} ${left} ${right} ${zIndex}`}
  >
    {label}
  </button>
);
