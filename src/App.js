import Plants from "./components/Plants/Plants";
import Categories from "./components/Categories/Categories"

function App() {
  return (
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
  );
}

export default App;
