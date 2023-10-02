import { Category } from "@/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { SetStateAction } from "react";

type Props = {
    placeholder: string;
    selectLabel: string;
    selectItems: Category[] | null;
    onValueChange: any;
    // onValueChange: (event: {
    //     target: { value: SetStateAction<null> };
    // }) => void
}

export default function DropdownSelect({
    placeholder,
    selectLabel,
    selectItems,
    onValueChange
}: Props) {
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-[180px] focus:ring-sky-500">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{selectLabel}</SelectLabel>
                    {selectItems && selectItems.map((item) => (
                        // {/* TODO: convert SelectItem key and value props to expect just strings */}
                        <SelectItem key={item?._id ?? item} value={item.title.toLowerCase()}>{item.title}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>

    );
}
