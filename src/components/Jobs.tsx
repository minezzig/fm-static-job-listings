import { useEffect, useState } from "react";
import jobsList from "../data/data.json";
import { JobsProps, JobType } from "../../types/types";
import Job from "./Job";
function Jobs({ filters, setFilters }: JobsProps) {
  const [filteredList, setFilterdList] = useState<JobType[]>([]);

  useEffect(() => {
    const filtered = jobsList.filter((job) => {
      //filter jobs and check for each element, if it's not there, it's true
      const role = filters.role ? filters.role === job.role : true;
      const level = filters.level ? filters.level === job.level : true;
      const hasLang = filters.languages
        ? filters.languages.every((lang) => job.languages.includes(lang))
        : true;
      const hasTool = filters.tools
        ? filters.tools.every((tool) => job.tools.includes(tool))
        : true;

      return role && level && hasLang && hasTool;
    });
    setFilterdList(filtered);
  }, [filters]);

  return (
    <div className="md:container flex flex-col gap-12 pb-20">
      {(filteredList.length === 0 ? jobsList : filteredList).map((job, i) => (
        <Job key={i} job={job} filters={filters} setFilters={setFilters} />
      ))}
    </div>
  );
}

export default Jobs;
