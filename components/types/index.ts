import { Category } from "@/types";

export type FilterOptions = {
    category: Category[] | null;
};

export type AppliedFilters = {
    category: string | null;
};
