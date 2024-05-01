import { OfficeHour } from "../../models/officeHour.model";
import { Link } from "react-router-dom";
import { KolynButton } from "../../styles";
import { reverseDepartment } from "../../models/departmentOptions";

const OfficeHourCard: React.FC<OfficeHour> = (props) => {
  const { department, courseNumber, startDate, endDate, slot } = props;

  return (
    <div className="card shadow-md border-4 min-w-[300px] max-w-[300px] m-4">
      <div className="card-body divide-y-2 pb-2">
        <h3 className="card-title text-3xl my-6 h-0.5 border-t-0 ">{department + " " + courseNumber}</h3>
        <DurationEntry start={startDate} end={endDate} />
      </div>
      <div className="card-body pt-0">
        {slot.map((s) => (
          <h4 className="flex flex-row" key={s.day}>
            {s.day + ":"}
            &nbsp;
            <DurationEntry start={s.startTime} end={s.endTime} />
          </h4>
        ))}
        <div className="flex flex-col items-center">
          <Link
            to={`/edit/${slot[0].id}`}
            state={{
              officeHour: { ...props, department: reverseDepartment[props.department as keyof typeof reverseDepartment] },
            }}
          >
            <KolynButton label="Edit" isResponsive={false} onClick={undefined} bgColor="bg-mainColor" />
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
      <div className="flex flex-row gap-x-1">
        <h3 className="text-errorColor">{props.start}</h3>
        <h4 className="text-lg text-center text-disableColor">~</h4>
        <h3 className="text-checkBoxColor">{props.end}</h3>
      </div>
    </div>
  );
};

export default OfficeHourCard;
