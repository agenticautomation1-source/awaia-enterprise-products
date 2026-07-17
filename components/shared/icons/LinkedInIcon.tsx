type Props = {
  className?: string;
};

export default function LinkedInIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.60457 4.08457 5.5 2.98 5.5C1.87543 5.5 0.98 4.60457 0.98 3.5C0.98 2.39543 1.87543 1.5 2.98 1.5C4.08457 1.5 4.98 2.39543 4.98 3.5ZM1.23 8H4.73V22H1.23V8ZM8.23 8H11.58V9.91H11.63C12.1 9.02 13.25 8.08 14.96 8.08C18.52 8.08 19.23 10.33 19.23 13.26V22H15.73V14.19C15.73 12.33 15.69 9.93 13.14 9.93C10.56 9.93 10.16 11.79 10.16 14.06V22H6.66V8H8.23Z" />
    </svg>
  );
}