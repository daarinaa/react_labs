import { Input } from "@chakra-ui/react";
import {
  Select,
  createListCollection,
  Portal
} from "@ark-ui/react";

const frameworks = createListCollection({
  items: [
    { label: "Сначала новые", value: "desc" },
    { label: "Сначала старые", value: "asc" },
  ],
});

export default function Filters({ filter, setFilter }) {
  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="Поиск"
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <Select.Root
        items={frameworks.items}
        value={filter.sortOrder}
        onChange={(value) => {
          console.log("Сортировка изменилась:", value);
          setFilter({ ...filter, sortOrder: value });
        }}
      >
        <Select.Label>Сортировка</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Выберите сортировку" />
          </Select.Trigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </div>
  );
}
