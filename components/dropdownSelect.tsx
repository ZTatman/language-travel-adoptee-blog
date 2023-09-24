import { Category } from "@/types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

type Props = {
    placeholder: string;
    selectLabel: string;
    selectItems: Category[];
}

export default function DropdownSelect({ placeholder, selectLabel, selectItems }: Props) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{selectLabel}</SelectLabel>
                    {selectItems.map((item) => (
                        <SelectItem key={item?._id ?? item} value={item.title.toLowerCase()}>{item.title}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>

    );
}
