const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary: "border border-slate-300 hover:bg-slate-100 text-slate-900",
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
