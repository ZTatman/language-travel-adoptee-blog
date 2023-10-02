import { useState, useEffect, SetStateAction } from "react";

import { Separator } from "../ui/separator";
import DropdownSelect from "../dropdownSelect";
import { Category } from "@/types";

type FilterObject = {
    category?: Category[]
};

type Props = {
    filters: FilterObject;
    filterOptions: FilterObject;
    onFilterChange: React.Dispatch<React.SetStateAction>;
    onClearFilters: () => void;
};

function Filters({
    filters,
    filterOptions,
    onFilterChange,
    onClearFilters,
}: Props) {
    const [categoryFilter, setCategoryFilter] = useState(null);

    useEffect(() => {
        if (filters.category === null) {
            setCategoryFilter([]);
        }
    }, [filters.category])

    useEffect(() => {
        onFilterChange((prevFilters: FilterObject) => ({ ...prevFilters, category: categoryFilter }));
    }, [categoryFilter])

    return (
        <div className="flex h-10 items-center space-x-4">
            <button className="active:text-sky-600 text-muted-foreground">View All</button>
            <Separator orientation="vertical" />
            <DropdownSelect
                placeholder="Sort by Category"
                selectLabel="All Categories"
                selectItems={filterOptions.category}
                onValueChange={setCategoryFilter}
            />
        </div>

    );
}

export default Filters;
