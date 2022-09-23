import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Component
import RadioFilter from "./components/RadioFilter";

// Context
import { RadioContextProvider } from "./context/RadioContext";

// ReactQuery Provider
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RadioContextProvider>
          <RadioFilter />
        </RadioContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
