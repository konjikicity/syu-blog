import moment from "moment";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = moment(dateString).format("YYYY年MM月DD日");
  return <time>{date}</time>;
};

export default DateFormatter;
