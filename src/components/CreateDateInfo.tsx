import { getDateDiffInDays } from "../utils";

interface CreateDateInfoProps {
  createDate: Date;
}

export function CreateDateInfo(props: CreateDateInfoProps) {
  const { createDate } = props;
  const today = new Date();
  const dateDiffInDays = getDateDiffInDays(createDate, today);

  return <span>create {dateDiffInDays} days ago</span>;
}
