type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <section className="py-32 border-t border-gray-100">
      {children}
    </section>
  );
}