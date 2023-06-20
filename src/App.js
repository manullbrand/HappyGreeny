import Plants from "./components/Plants/Plants";
import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <div className="App">
        <Banner />
        <main>
          <Categories />
          <Plants />
        </main>
      </div>
    </LocalizationProvider>
  );
}

export default App;
