export default function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
