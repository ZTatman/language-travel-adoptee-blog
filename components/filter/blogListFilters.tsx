import { memo, useState, useEffect } from "react";

import { Separator } from "../ui/separator";
import DropdownSelect from "./blogListFilters";
import { AppliedFilters, FilterOptions } from "../types";

type Props = {
    filterOptions: FilterOptions;
    onFilterChange: React.Dispatch<React.SetStateAction<AppliedFilters>>
    onClearFilters: () => void;
};

function BlogListFilters({
    filterOptions,
    onFilterChange,
    onClearFilters,
}: Props) {
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

    useEffect(() => {
        onFilterChange((prevFilters): AppliedFilters => ({ ...prevFilters, category: categoryFilter }));
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

export default memo(BlogListFilters);
