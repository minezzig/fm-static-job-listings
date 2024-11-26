
export interface JobType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface JobsProps {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export interface JobProps {
    job: JobType;
    filters: FiltersType;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}


export interface FilterProps {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export interface FiltersType {
  role?: string;
  level?: string;
  languages?: string[];
  tools?: string[];
}

