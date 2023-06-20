// Here will be the action points to take care of our indoor plants, as: when to water, to trim, to fertilize and to repot.

import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export default function Actions() {
  // se data de aguar for maior do que o watering days, mostrar plantinha com sede; do contrário, mostrar plantinhas verdinhas
  // criar uma lista com essas datas e usar o calendário apenas para atualizar essa lista, pois colocar states (e localStorage) diretamente dentro do calendário está dando muito problema.

  const [selectedDate, setSelectedDate] = useState("");
  const [list, setList] = useState([]);

  const formatDate = (date) => {
    const selectedDate = new Date(date);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();

    return {
      day,
      month,
      year,
    };
  };

  const handleAddItem = (date) => {
    const newItem = (
      <>
        {formatDate(selectedDate).day}/{formatDate(selectedDate).month}/
        {formatDate(selectedDate).year}
      </>
    );

    if (list.length < 4) {
      setList((prevList) => [...prevList, newItem]);
    } else {
      setList((prevList) => [...prevList.slice(1), newItem]);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleAddItem(date);
  };

  return (
    <>
      <DatePicker
        format="DD-MM-YYYY"
        label={"Watered"}
        value={selectedDate}
        onChange={handleDateChange}
        TextField={(params) => <TextField {...params} />}
      />
      {/* Essa lista aqui embaixo deveria ser um componente? */}
      {selectedDate && (
        <ul>
          {/* slice(1) to do not render the first date = NaN */}
          {list.slice(1).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <DatePicker format="DD-MM-YYYY" label={"Fertilized"} />

      <DatePicker format="DD-MM-YYYY" label={"Trimmed"} />
      <ul>
        <li>Date 1</li>
        <li>Date 2</li>
        <li>Date 3</li>
      </ul>
      <DatePicker format="DD-MM-YYYY" label={"Repoted"} />
      <ul>
        <li>Date 1</li>
        <li>Date 2</li>
        <li>Date 3</li>
      </ul>
    </>
  );
}
