export default function SignalBars() {
  return (
    <div className="flex items-center gap-2">

      <div
        className="waveform-bar"
        style={{
          height: "32px",
          marginTop: "18px",
          animationDelay: "0s",
        }}
      />

      <div
        className="waveform-bar"
        style={{
          height: "56px",
          marginTop: "0px",
          animationDelay: "0.15s",
        }}
      />

      <div
        className="waveform-bar"
        style={{
          height: "42px",
          marginTop: "28px",
          animationDelay: "0.3s",
        }}
      />

      <div
        className="waveform-bar"
        style={{
          height: "72px",
          marginTop: "-8px",
          animationDelay: "0.45s",
        }}
      />

      <div
        className="waveform-bar"
        style={{
          height: "36px",
          marginTop: "12px",
          animationDelay: "0.6s",
        }}
      />

    </div>
  );
}