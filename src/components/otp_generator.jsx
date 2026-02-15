const { useState, useEffect, useRef } = React;

function OTPGenerator() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef(null);

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000)
      .toString()
      .padStart(6, "0");

    setOtp(newOTP);
    setTimeLeft(5);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [timeLeft]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp === "" ? "Click 'Generate OTP' to get a code" : otp}
      </h2>

      <p id="otp-timer" aria-live="assertive">
        {timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : otp !== "" && timeLeft === 0
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
}

export { OTPGenerator };
