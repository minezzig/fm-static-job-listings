import { JobProps } from "../../types/types";
import { FiltersType } from "../../types/types";

function Job({ job, filters, setFilters }: JobProps) {
  const handleAddFilter = (key: keyof FiltersType, value: string) => {
    // if tag is already in filter, return
    if (Object.values(filters).flat().includes(value)) return;

    setFilters((prev) => {
      // make copy of filters object
      const updatedFilters: FiltersType = { ...prev };
      //update if it is a single value
      if (key === "role" || key === "level") updatedFilters[key] = value;
      //update by adding to array or creating an array
      else {
        updatedFilters[key] = prev[key]
          ? [...(prev[key] as string[]), value]
          : [value];
      }
      return updatedFilters;
    });
  };

  return (
    <div className="shadowBox relative flex w-full flex-col rounded bg-white p-5 pt-10 md:flex-row md:items-center md:justify-between md:pt-5 group">
      <div className="group-hover:bg-primary transition-all h-full w-1 absolute left-0 top-0 rounded-l-lg"></div>
      <div className="flex items-center">
        <div className="absolute top-0 -translate-y-1/2 md:static md:translate-y-0">
          <img src={job.logo} alt="image" className="w-3/4" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <div className="mr-5 text-sm font-bold text-primary">
              {job.company}
            </div>
            <div>
              {job.new && (
                <div className="mr-3 inline-block rounded-2xl bg-primary px-2 pt-1 text-xs uppercase text-white">
                  new!
                </div>
              )}
              {job.featured && (
                <div className="inline-block rounded-2xl bg-dark px-2 pt-1 text-xs uppercase text-white">
                  featured
                </div>
              )}
            </div>
          </div>
          <div className="cursor-pointer font-bold text-dark hover:text-primary">
            {job.position}
          </div>
          <div className="flex gap-3 text-xs text-secondary">
            <div>{job.postedAt}</div>
            <span>•</span>
            <div>{job.contract}</div>
            <span>•</span>
            <div>{job.location}</div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex gap-3 flex-wrap">
        <span
          className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
          onClick={() => handleAddFilter("role", job.role)}
        >
          {job.role}
        </span>
        <span
          className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
          onClick={() => handleAddFilter("level", job.level)}
        >
          {job.level}
        </span>
        {job.languages.map((language) => (
          <span
            key={language}
            className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
            onClick={() => handleAddFilter("languages", language)}
          >
            {language}
          </span>
        ))}
        {job.tools.map((tool) => (
          <span
            key={tool}
            className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
            onClick={() => handleAddFilter("tools", tool)}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Job;

/*
import { JobProps } from "../../types/jobs";

function Job({ job, filters, setFilters }: JobProps) {
  const handleAddFilter = (key: string, value: string) => {
    // if tag is already in filter, return
    if (Object.values(filters).flat().includes(value)) return;
    //update if it is a single value
    if (key === "role" || key === "level")
      setFilters((prev) => ({ ...prev, [key]: value }));
    else {
      setFilters((prev) => {
        // if string already exits in array, add.  otherwise, create an array
        if (prev[key]) {
          return { ...prev, [key]: [...prev[key], value] };
        } else {
          return { ...prev, [key]: [value] };
        }
      });
    }
  };

  return (
    <div className="shadowBox relative flex w-full flex-col rounded bg-white p-5 pt-10 md:flex-row md:items-center md:justify-between md:pt-5">
      <div className="flex items-center">
        <div className="absolute top-0 -translate-y-1/2 md:static md:translate-y-0">
          <img src={job.logo} alt="image" className="w-3/4" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <div className="mr-5 text-sm font-bold text-primary">
              {job.company}
            </div>
            <div>
              {job.new && (
                <div className="mr-3 inline-block rounded-2xl bg-primary px-2 pt-1 text-xs uppercase text-white">
                  new!
                </div>
              )}
              {job.featured && (
                <div className="inline-block rounded-2xl bg-dark px-2 pt-1 text-xs uppercase text-white">
                  featured
                </div>
              )}
            </div>
          </div>
          <div className="cursor-pointer font-bold text-dark hover:text-primary">
            {job.position}
          </div>
          <div className="flex gap-3 text-xs text-secondary">
            <div>{job.postedAt}</div>
            <span>•</span>
            <div>{job.contract}</div>
            <span>•</span>
            <div>{job.location}</div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex gap-3">
        <span
          className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
          onClick={() => handleAddFilter("role", job.role)}
        >
          {job.role}
        </span>
        <span
          className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
          onClick={() => handleAddFilter("level", job.level)}
        >
          {job.level}
        </span>
        {job.languages.map((language) => (
          <span
            key={language}
            className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
            onClick={() => handleAddFilter("languages", language)}
          >
            {language}
          </span>
        ))}
        {job.tools.map((tool) => (
          <span
            key={tool}
            className="cursor-pointer rounded-sm bg-background p-1 text-primary hover:bg-primary hover:text-background"
            onClick={() => handleAddFilter("tools", tool)}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Job;


*/
