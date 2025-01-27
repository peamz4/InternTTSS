"use client";

import { useMantineColorScheme, Button, Group, Select, type MantineColorScheme } from "@mantine/core";
import { useState } from "react";

export function ColorSchemesSwitcher() {
    const { setColorScheme, clearColorScheme } = useMantineColorScheme();
    const [value, setValue] = useState<string | null>(null);

    const handleChange = (value: string | null) => {
        setValue(value);
        if (value === "clear") {
            clearColorScheme();
        } else if (value) {
            setColorScheme(value as MantineColorScheme);
        }
    };

    return (
        <Group>
            <Select
                placeholder="Select color scheme"
                value={value}
                onChange={handleChange}
                data={[
                    { value: "light", label: "Light" },
                    { value: "dark", label: "Dark" },
                    { value: "auto", label: "Auto" },
                    { value: "clear", label: "Clear" },
                ]}
            />
        </Group>
    );
}