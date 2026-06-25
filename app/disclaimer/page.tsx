import LegalLayout from "@/components/legal/LegalLayout";

export default function Page() {
  return (

<LegalLayout
  title="Disclaimer"
  heroImage="/images/disclaimer-hero.png"
>

      <h2>General Information</h2>
      <p>
        Information provided on this website is for informational purposes only.
      </p>

      <h2>AI Output Limitations</h2>
      <p>
        AI systems may generate inaccurate or incomplete outputs.
      </p>

      <h2>No Legal Or Financial Advice</h2>
      <p>
        Nothing on this website constitutes legal, financial,
        regulatory, or audit advice.
      </p>
    </LegalLayout>
  );
}