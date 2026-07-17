type Props = {
  className?: string;
};

export default function XIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-7.02L5.9 22H2.8l7.24-8.28L.8 2h6.35l4.43 6.37L18.9 2Zm-1.1 18h1.73L6.2 3.9H4.35L17.8 20Z" />
    </svg>
  );
}