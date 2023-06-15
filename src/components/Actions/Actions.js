// Here will be the action points to take care of our indoor plants, as: when to water, to trim, to fertilize and to repot.

import { DatePicker } from "@mui/x-date-pickers";

export default function Actions() {
  // se data de aguar for maior do que o watering days, mostrar plantinha com sede; do contrário, mostrar plantinhas verdinhas
  // criar uma lista com essas datas e usar o calendário apenas para atualizar essa lista, pois colocar states (e localStorage) diretamente dentro do calendário está dando muito problema.

  return (
    <>
      <DatePicker format="DD-MM-YYYY" label={"Watered"} />
      <DatePicker format="DD-MM-YYYY" label={"Fertilized"} />
      <DatePicker format="DD-MM-YYYY" label={"Trimmed"} />
      <DatePicker format="DD-MM-YYYY" label={"Repoted"} />
    </>
  );
}
