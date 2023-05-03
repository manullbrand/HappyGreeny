// Here will be the action points to take care of the indoor plants, like when to water, trim, fertilize and repot.

import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { useEffect, useState } from "react";

export default function Actions() {
  // se data de aguar for maior do que o watering days, mostrar plantinha com sede; do contrário, mostrar plantinhas verdinha

  const [selectedDate, setSelectedDate] = useState(
    moment(JSON.parse(localStorage.getItem("selectedDate"))) || null
  );

  // Update localStorage whenever selectedDate changes
  useEffect(() => {
    localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
  }, [selectedDate]);

  const handleChange = (date) => {
    setSelectedDate(moment(date));
  };

  //uses moment.js to compare dates
  const isBeforeToday = selectedDate && selectedDate.isBefore(moment(), "day");

  return (
    <>
      <div>
        <DatePicker
          format="DD-MM-YYYY"
          label={"Watered"}
          value={selectedDate}
          onChange={handleChange}
        />
        {isBeforeToday && <div> The selected date is before today.</div>}
      </div>

      <DatePicker format="DD-MM-YYYY" label={"Fertilized"} />
      <DatePicker format="DD-MM-YYYY" label={"Trimmed"} />
      <DatePicker format="DD-MM-YYYY" label={"Repoted"} />
    </>
  );
}
