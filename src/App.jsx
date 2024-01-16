import Plants from "./components/Plants/Plants";
import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
     { /* checar onde abrir e fechar o Localization Provider. Checar se posso colocar dentro do componente Plants */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Categories />
        <Plants />
        <Footer />
      </LocalizationProvider>
    </div>
  );
}

export default App;
