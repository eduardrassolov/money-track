import dayjs from "dayjs";
import { useState } from "react";

function useRangePicker() {
  const [rangeDates, setRangeDates] = useState([dayjs(), dayjs()]);
  const changeRange = (range) => setRangeDates(() => range);

  return { rangeDates, changeRange };
}

export default useRangePicker;
