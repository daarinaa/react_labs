import { Input, Select } from "@chakra-ui/react";

export default function Filters () {
    return (
        <div className="flex flex-col gap-5">
            <Input placeholder="nonck" />
            <Select>
                <option>Сначала новые</option>
                <option>Сначала старые</option>
            </Select>
        </div>
    );
}