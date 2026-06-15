import moment from "moment";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = moment(dateString).format("YYYY.MM.DD");
  return (
    <time className="text-xs text-fg-subtle tracking-wider">
      {date}
    </time>
  );
};

export default DateFormatter;
