import { useState } from "react";
import Jobs from "./components/Jobs";
import Search from "./components/Filter";
import { FiltersType } from "../types/types";

function App() {
  const [filters, setFilters] = useState<FiltersType>({});

  return (
    <div className="min-h-screen w-full grid grid-rows-[auto_1fr_auto]">
      <div className="h-28 bg-primary bg-[url('/images/bg-header-mobile.svg')] bg-cover bg-center md:bg-[url('/images/bg-header-desktop.svg')]"></div>
      <div className="h-vh bg-background px-10 md:px-20">
        <Search filters={filters} setFilters={setFilters} />
        <Jobs filters={filters} setFilters={setFilters} />
      </div>
      <div className="h-10 w-full bg-primary flex items-center justify-center text-white">minezzi</div>
    </div>
  );
}

export default App;
