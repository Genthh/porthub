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
    className={`${color} absolute px-4 py-1 text-lg rounded-full shadow-md ${rotation} ${bottom} ${left} ${right} ${zIndex}`}
  >
    {label}
  </button>
);
