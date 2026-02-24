"use client";

import { Stack } from "@mui/material";
import MuiSelect from "./MuiSelect";
import MuiTextField from "./MuiTextField";
import { useMemo, useState } from "react";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useDebounce } from "use-debounce";

type SelectConfig = {
  id: number;
  label: string;
  values: string[];
};

interface QueryInputProps {
  querySelectTitles: SelectConfig[];
  textFieldLabel: string;
}

export default function MuiQueryInput({
  querySelectTitles,
  textFieldLabel,
}: QueryInputProps) {
  // Memoising values as initial state - because we may not know the number of Selects at compile time
  const initialSelected = useMemo(() => {
    return Object.fromEntries(
      querySelectTitles.map((cfg) => [cfg.id, cfg.values[0] ?? ""]),
    ) as Record<number, string>;
  }, [querySelectTitles]);

  // Store the MUIselected values in state
  const [selectedById, setSelectedById] =
    useState<Record<number, string>>(initialSelected);
  const [input, setInput] = useState("");

  // Store the debounced selected values in state
  const [value] = useDebounce(input, 5000);

  // storing the selected values and updating the state
  const handleSelectChange = (id: number) => (e: SelectChangeEvent<string>) => {
    const nextValue = e.target.value;
    setSelectedById((prev) => ({ ...prev, [id]: nextValue }));
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-row mt-6 bg-white rounded-md p-5 shadow-xl">
      <Stack direction="row" spacing={5} alignItems="center">
        <MuiTextField
          label={textFieldLabel}
          onChange={handleTextFieldChange}
          value={input}
        />

        {querySelectTitles.map((cfg) => (
          <MuiSelect
            key={cfg.id}
            inputLabelValue={cfg.label}
            options={cfg.values.map((v) => ({ label: v, value: v }))}
            value={selectedById[cfg.id] ?? cfg.values[0] ?? ""}
            onChange={handleSelectChange(cfg.id)}
          />
        ))}
      </Stack>
    </div>
  );
}
