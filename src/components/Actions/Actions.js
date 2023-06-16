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

  const handleAddItem = () => {
    const newItem = (
      <li>
        {formatDate(selectedDate).day}/{formatDate(selectedDate).month}/
        {formatDate(selectedDate).year}
      </li>
    );

    setList((prevList) => [...prevList, newItem]);
    //corrigir aqui nessa lógica o NaN que parece na lista a primeira vez que ela é renderizada
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleAddItem();
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
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <DatePicker format="DD-MM-YYYY" label={"Fertilized"} />
      <ul>
        <li>Date 1</li>
        <li>Date 2</li>
        <li>Date 3</li>
      </ul>
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
