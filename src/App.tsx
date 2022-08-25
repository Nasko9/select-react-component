// Component
import RadioFilter from "./components/RadioFilter";

// Context
import { RadioContextProvider } from "./context/RadioContext";

//? Zamislio sam da ovo se bude jedna komponenta.
//? Pitanje: Kako da napravim da kada mu se prosledi data on zna da li će napraviti 2 grupe ili kao u ovom primeru 4?
//? Da ne bih morao Select box komponentu ponavljao 4 puta već da je napišem samo jednom i toliko.

function App() {
  return (
    <div className="App">
      <RadioContextProvider>
        <RadioFilter />
      </RadioContextProvider>
    </div>
  );
}

export default App;
