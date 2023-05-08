import { getDateDiffInDays } from "../utils";
import "./CreateDateInfo.css";

interface CreateDateInfoProps {
  createDate: Date;
}

export function CreateDateInfo(props: CreateDateInfoProps) {
  const { createDate } = props;
  const today = new Date();
  const dateDiffInDays = getDateDiffInDays(createDate, today);

  return (
    <span>
      created{" "}
      <time className="tooltip">
        <span className="tooltipText">{createDate.toUTCString()}</span>
        {dateDiffInDays} days ago
      </time>
    </span>
  );
}
