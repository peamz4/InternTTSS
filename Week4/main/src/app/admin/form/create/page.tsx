"use client";

import { type SetStateAction, useState } from "react";
import {
  Container,
  Card,
  Title,
  Text,
  TextInput,
  Button,
  Stack,
  Group,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function GoogleFormPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [storedQuestions] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("questions") || "[]");
    }
    return [];
  });

  const form = useForm({
    initialValues: {
      formName: "",
      formDescription: "",
      questions: storedQuestions.length > 0 ? storedQuestions : [{ question: "", type: "Short answer", options: [""] }],
    },
  });

  const addQuestion = (index: number) => {
    form.insertListItem("questions", { question: "", type: "Short answer", options: [""] });
  };

  const removeQuestion = (index: number) => {
    form.removeListItem("questions", index);
    if (selectedIndex === index) setSelectedIndex(null);
  };

  const addOption = (index: number) => {
    form.insertListItem(`questions.${index}.options`, "");
  };

  const removeOption = (qIndex: number, optIndex: number) => {
    if (form.values.questions[qIndex].options.length > 1) {
      form.removeListItem(`questions.${qIndex}.options`, optIndex);
    }
  };

  return (
    <Container size="lg" className="min-h-screen xl:w-6/12 flex gap-4 p-4 relative">
      <Stack className="flex-1 overflow-y-auto pr-20">
        <Card shadow="sm" padding="lg" radius="md" className="w-full">
          <Stack>
            <Title order={2} className="text-center">Create a Survey</Title>
            <Text className="text-gray-500 text-center">Fill out the details below</Text>
            <TextInput
              label="Form Name"
              placeholder="Enter form name"
              {...form.getInputProps("formName")}
            />
            <Textarea
              label="Form Description"
              placeholder="Enter form description"
              {...form.getInputProps("formDescription")}
            />
          </Stack>
        </Card>

        {form.values.questions.map((q: { question: string; type: string; options: string[]; }, index: SetStateAction<number | null>) => (
          <div key={`${q.question}-${index}`} className="relative">
            {selectedIndex === index && (
              <div className="absolute  right-[-50] z-10">
                <Button
                  className=" text-white shadow-md rounded-xl p-3"
                  size="sm"
                  onClick={() => addQuestion(form.values.questions.length)}
                >
                  +
                </Button>
              </div>
            )}
            <Card
              shadow="md"
              padding="md"
              className="w-full"
              withBorder
              onClick={() => setSelectedIndex(index)}
            >
              <Stack>
                <Group>
                  <TextInput
                    label={`Question ${typeof index === 'number' ? index + 1 : ''}`}
                    placeholder="Enter question"
                    {...form.getInputProps(`questions.${index}.question`)}
                    className="flex-1"
                  />
                  <Select
                    label="Type"
                    data={["Short answer", "Long answer", "Multiple choice", "Single choice", "Dropdown"]}
                    {...form.getInputProps(`questions.${index}.type`)}
                  />
                </Group>
                {q.type === "Short answer" && <TextInput placeholder="User input" disabled />}
                {q.type === "Long answer" && <Textarea placeholder="User input" disabled />}
                {q.type === "Multiple choice" && (
                  <Stack>
                    {q.options.map((option, optIndex) => (
                      <Group key={`${option}-${index}-${optIndex}`}>
                        <Checkbox
                          label={<TextInput placeholder="Option" {...form.getInputProps(`questions.${index}.options.${optIndex}`)} />}
                        />
                        {q.options.length > 1 && (
                          <Button size="xs" color="red" onClick={() => removeOption(index, optIndex)}>X</Button>
                        )}
                      </Group>
                    ))}
                    <Button onClick={() => addOption(index)} variant="light">Add Option</Button>
                  </Stack>
                )}
                {q.type === "Single choice" && (
                  <Stack>
                    {q.options.map((option, optIndex) => (
                      <Group key={`${option}-${index}-${optIndex}`}>
                        <Radio
                          label={<TextInput placeholder="Option" {...form.getInputProps(`questions.${index}.options.${optIndex}`)} />}
                        />
                        {q.options.length > 1 && (
                          <Button size="xs" color="red" onClick={() => removeOption(index, optIndex)}>X</Button>
                        )}
                      </Group>
                    ))}
                    <Button onClick={() => addOption(index)} variant="light">Add Option</Button>
                  </Stack>
                )}
                {q.type === "Dropdown" && (
                  <Stack>
                    {q.options.map((option, optIndex) => (
                      <Group key={`${option}-${index}-${optIndex}`}>
                        <TextInput placeholder="Option" {...form.getInputProps(`questions.${index}.options.${optIndex}`)} />
                        {q.options.length > 1 && (
                          <Button size="xs" color="red" onClick={() => removeOption(index, optIndex)}>X</Button>
                        )}
                      </Group>
                    ))}
                    <Button onClick={() => addOption(index)} variant="light">Add Option</Button>
                  </Stack>
                )}
                <Button size="xs" color="red" onClick={() => removeQuestion(index)}>Remove Question</Button>
              </Stack>
            </Card>
          </div>
        ))}

        <Button onClick={() => console.log("Save Survey", form.values)} color="red" className="p-2 rounded-md mt-4 mb-8 font-bold">
          Save Change 💾
        </Button>
      </Stack>
    </Container>
  );
}
