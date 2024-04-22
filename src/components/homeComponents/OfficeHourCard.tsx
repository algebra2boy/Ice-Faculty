import { OfficeHourInfo } from "../../models/officeHour.model";
import { Link } from "react-router-dom";

const OfficeHourCard: React.FC<OfficeHourInfo> = (props) => {
  const { id, startDate, endDate, day, startTime, endTime, courseDepartment, courseNumber } = props;

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
    <div className="card bg-gray-300 shadow-md">
      <div className="card-body">
        <h3 className="card-title">{courseDepartment + " " + courseNumber}</h3>
        <h4 className="text-md">{startDate + " - " + endDate}</h4>
        <h4 className="text-md">{dayConverter(day) + ": " + startTime + " - " + endTime}</h4>
        <div className="card-actions justify-end">
          <Link to={`/officeHour/${id}`}>
            <button className="btn">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfficeHourCard;
