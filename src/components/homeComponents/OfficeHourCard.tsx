import { OfficeHour } from "../../models/officeHour.model";
import { Link } from "react-router-dom";
import { KolynButton } from "../../styles";

const OfficeHourCard: React.FC<OfficeHour> = (props) => {
  const { id, department, courseNumber, startDate, endDate, slot } = props;

  const dayConverter = (day: number) => {
    switch (day) {
      case 0:
        return "Mon";
      case 1:
        return "Tue";
      case 2:
        return "Wed";
      case 3:
        return "Thu";
      case 4:
        return "Fri";
      case 5:
        return "Sat";
      case 6:
        return "Sun";
      default:
        break;
    }
  };

  return (
    <div className="card shadow-md border-4 min-w-[300px] max-w-[300px] m-4">
      <div className="card-body divide-y-2">
        <h3 className="card-title text-3xl my-6 h-0.5 border-t-0 ">{department + " " + courseNumber}</h3>
        <DurationEntry start={startDate} end={endDate} />
      </div>
      <div className="card-body">
        <h4 className="flex flex-row">
          {/* {dayConverter(day) + ":" } */}
          &nbsp;
          {/* <DurationEntry start={startTime} end={endTime} /> */}
        </h4>
        <div className="flex flex-col items-center">
          <Link to={`/edit/${id}`}
            state={{
              officeHour: props,
            }}>
            <KolynButton label="Edit" isResponsive={false} />
          </Link>
        </div>
      </div>
    </div>
  );
};

// A - B
interface DurationProps {
  start: string;
  end: string;
}

const DurationEntry: React.FC<DurationProps> = (props) => {
  return (
    <div>
      <h3 className="flex flex-row gap-x-1">
        <h3 className="text-errorColor">
          {props.start}
        </h3>
        <h4 className="text-lg text-center text-disableColor">
          ~
        </h4>
        <h3 className="text-checkBoxColor">
          {props.end}
        </h3>
      </h3>
    </div>
  );
}

export default OfficeHourCard;
