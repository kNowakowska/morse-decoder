import { DURATION_LIMIT, MORSE_CODE } from "../constants";

function Text({ durations }) {
  const getMorseValue = () => {
    return durations
      .map((duration) =>
        duration === " " ? duration : duration >= DURATION_LIMIT ? "-" : "."
      )
      .join("");
  };
  const getText = () => {
    const morseValue = getMorseValue();
    return morseValue
      .split(" ")
      .map((sign) => MORSE_CODE[sign])
      .join(" ");
  };

  return <span>{getText()}</span>;
}

export default Text;
