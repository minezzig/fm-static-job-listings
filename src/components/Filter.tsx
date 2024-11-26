import { FilterProps } from "../../types/types";

function Search({ filters, setFilters }: FilterProps) {
  // reset all filter tags to empty array
  const handleClear = () => {
    setFilters({});
  };

  // used to remove individaul filter tags
  const handleRemoveFilter = (tag: string) => {
    //copy of filters
    const updatedFilters: { [key: string]: string | string[] } = { ...filters };

    //loops through filter to remove tag
    Object.entries(filters).map(([key, value]) => {
      if (Array.isArray(value)) {
        updatedFilters[key] = value.filter((item) => tag !== item);
      } else if (value === tag) {
        updatedFilters[key] = "";
      }
    });
    setFilters(updatedFilters);
  };

  const showFilterBar = () => {
    const tagsSelected =
      Object.values(filters)
        .flat()
        .filter((item) => item !== "").length > 0;
    return tagsSelected ? "visible" : "invisible";
  };

  return (
    <div
      className={`${showFilterBar()} rouded-sm shadowBox mb-10 flex -translate-y-1/2 items-center justify-between bg-white p-3 h-12`}
    >
      <div className="flex flex-wrap gap-3">
        {Object.values(filters)
          .flat()
          .filter((tag) => tag !== "")
          .map((tag) => (
            <div className="flex" key={tag}>
              <div className="rounded-sm bg-background p-1 pr-2 text-primary">
                {tag}
              </div>
              <div
                onClick={() => handleRemoveFilter(tag)}
                className="rounded-[0 .125rem .125rem 0] flex cursor-pointer items-center bg-primary px-2 transition-all hover:bg-dark"
              >
                <img src="/images/icon-remove.svg" alt="close" />
              </div>
            </div>
          ))}
      </div>
      <div
        className="cursor-pointer text-xs text-secondary hover:text-primary hover:underline"
        onClick={handleClear}
      >
        Clear
      </div>
    </div>
  );
}

export default Search;
