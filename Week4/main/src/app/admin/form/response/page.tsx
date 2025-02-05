"use client";

import { useState, useEffect } from "react";
import { Container, Card, Title, Text, Stack, Select, Divider } from "@mantine/core";

export default function ResponseCollectionPage() {
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const [responses, setResponses] = useState([]);
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    // Load surveys and responses from localStorage or API
    if (typeof window !== "undefined") {
      const storedSurveys = JSON.parse(localStorage.getItem("surveys") || "[]");
      const storedResponses = JSON.parse(localStorage.getItem("responses") || "[]");
      setSurveys(storedSurveys);
      setResponses(storedResponses);
    }
  }, []);

  const filteredResponses = responses.filter(
    (response) => response.surveyName === selectedSurvey
  );

  return (
    <Container size="lg" className="min-h-screen xl:w-6/12 flex gap-4 p-4">
      <Stack className="flex-1 overflow-y-auto pr-20">
        <Card shadow="sm" padding="lg" radius="md" className="w-full">
          <Stack>
            <Title order={2} className="text-center">Response Collection</Title>
            <Text className="text-gray-500 text-center">
              View responses for each survey
            </Text>
            <Select
              label="Select Survey"
              placeholder="Choose a survey"
              data={surveys.map((survey) => ({ value: survey.name, label: survey.name }))}
              value={selectedSurvey}
              onChange={setSelectedSurvey}
            />
          </Stack>
        </Card>

        {selectedSurvey && (
          <Card shadow="sm" padding="lg" radius="md" className="w-full mt-4">
            <Stack>
              <Title order={3}>{selectedSurvey} Responses</Title>
              <Divider my="sm" />
              {filteredResponses.length > 0 ? (
                filteredResponses.map((response, index) => (
                  <Card key={index} shadow="xs" padding="md" className="w-full mt-2" withBorder>
                    <Stack>
                      {response.answers.map((answer, i) => (
                        <div key={i}>
                          <Text className="font-bold">{answer.question}</Text>
                          <Text>{answer.answer}</Text>
                        </div>
                      ))}
                    </Stack>
                  </Card>
                ))
              ) : (
                <Text>No responses found for this survey.</Text>
              )}
            </Stack>
          </Card>
        )}
      </Stack>
    </Container>
  );
}
