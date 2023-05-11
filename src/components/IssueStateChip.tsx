import { Chip } from "@mui/material";

interface IssueStateChipProps {
  state: string;
}

export function IssueStateChip(props: IssueStateChipProps) {
  const { state } = props;

  return (
    <Chip
      label={state}
      size="small"
      color={state === "open" ? "success" : "secondary"}
      sx={{ borderRadius: "0.25rem" }}
    />
  );
}
