export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`flex w-full bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
