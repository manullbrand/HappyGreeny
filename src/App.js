import Plants from "./components/Plants/Plants";
import Categories from "./components/Categories/Categories";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <header className="App-header">
          <h1>SmilyGreeny</h1>
          <p>Organize your indoor plants!</p>
        </header>
        <main>
          <Categories />
          <Plants />
        </main>
      </div>
    </LocalizationProvider>
  );
}

export default App;
