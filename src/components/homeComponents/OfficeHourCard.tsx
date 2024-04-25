import { OfficeHour } from "../../models/officeHour.model";
import { Link } from "react-router-dom";
import { KolynButton } from "../../styles";

const OfficeHourCard: React.FC<OfficeHour> = (props) => {
  const { id, department, courseNumber, startDate, endDate, slot } = props;

  return (
    <div className="card shadow-md border-4 min-w-[300px] max-w-[300px] m-4">
      <div className="card-body divide-y-2">
        <h3 className="card-title text-3xl my-6 h-0.5 border-t-0 ">{department + " " + courseNumber}</h3>
        <DurationEntry start={startDate} end={endDate} />
      </div>
      <div className="card-body">
        {slot.map((s) => (
          <h4 className="flex flex-row" key={s.day}>
            {s.day + ":"}
            &nbsp;
            <DurationEntry start={s.startTime} end={s.endTime} />
          </h4>
        ))}
        <div className="flex flex-col items-center">
          <Link to={`/edit/${id}`} state={{ officeHour: props }}>
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
        <span className="text-errorColor">
          {props.start}
        </span>
        <span className="text-lg text-center text-disableColor">
          ~
        </span>
        <span className="text-checkBoxColor">
          {props.end}
        </span>
      </h3>
    </div>
  );
}

export default OfficeHourCard;
