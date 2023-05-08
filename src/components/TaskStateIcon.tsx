import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface TaskStateIconProps {
  state: "open" | "closed";
}

export function TaskStateIcon(props: TaskStateIconProps) {
  const { state } = props;

  return (
    <>
      {state === "open" ? (
        <AdjustIcon color="success" />
      ) : (
        <CheckCircleOutlineIcon color="secondary" />
      )}
    </>
  );
}
