import { Button, Input, Textarea } from "@chakra-ui/react";

export default function CreateNoteForm() {
    return (
        <form className="w-full flex flex-col gap-3">
            <h3 className="font-bold text-x1">Создание заметки</h3>
            <Input placeholder="Название" />
            <Textarea placeholder="Описание" />
            <Button colorScheme="teal">Создать</Button>
        </form>
    );
}