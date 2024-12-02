export const Button = ({
  label,
  color,
  rotation,
  bottom,
  left,
  right,
  zIndex = "z-10",
  width = "auto",
}: {
  label: string;
  color: string;
  rotation: string;
  bottom: string;
  left?: string;
  right?: string;
  zIndex?: string;
  width?: string;
}) => (
  <button
    className={`${color} text-base absolute px-2 py-2 rounded-full shadow-md ${rotation} ${bottom} ${left} ${right} ${zIndex} ${width}`}
  >
    {label}
  </button>
);
