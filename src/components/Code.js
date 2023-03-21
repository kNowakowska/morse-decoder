import Dot from "./Dot";
import Line from "./Line";

import { DURATION_LIMIT } from "../constants";
import Space from "./Spaace";

function Code({ durations }) {
  return (
    <div>
      {durations.map((duration) =>
        duration === " " ? (
          <Space />
        ) : duration >= DURATION_LIMIT ? (
          <Line />
        ) : (
          <Dot />
        )
      )}
    </div>
  );
}

export default Code;
