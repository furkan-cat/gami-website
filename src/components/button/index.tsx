import { CgSpinner } from "react-icons/cg";

interface IButtonProps {
  title: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primary-outline"
    | "secondary-outline"
    | "tertiary-outline";
  size?: "sm" | "md" | "lg";
  rounded?: "default" | "pill";
  loading?: boolean;
  className?: string;
}

export default function Button(props: IButtonProps) {
  const {
    title,
    variant = "primary",
    size = "md",
    loading = false,
    rounded = "default",
    className,
  } = props;
  return (
    <button
      type="submit"
      className={`${variant} ${size} rounded-${rounded} ${className} "btn flex items-center transition ease-in`}
      disabled={loading}
    >
      {loading && (
        <CgSpinner className="animate-spin h-5 w-5 mr-3 text-white" />
      )}
      <div>{title}</div>
    </button>
  );
}
