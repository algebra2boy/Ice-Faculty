import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OfficeHourDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>This is the detail page of office hour with id = {id}</h3>
      <Link to="/home">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
};

export default OfficeHourDetailPage;
