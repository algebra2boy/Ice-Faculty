import UploadForm from "../components/uploadComponents/UploadOHForm";
import { useState, useContext } from "react";
import { OfficeHour } from "../models/officeHour.model";
import { dayConverter } from "../components/uploadComponents/UploadOHForm";
import { useLocation, useNavigate } from "react-router-dom";
import { serverAddress } from "../serverAddress.config";
import { UserContext } from "../components/UserProvider";

const EditPage = () => {
  const { state } = useLocation();
  const officeHour = state.officeHour;
  const navigate = useNavigate()

  const {userEmail }= useContext(UserContext)
  
  const [uploadOfficeHour, setUploadOfficeHour] = useState<OfficeHour>(officeHour);

  const fetchHandler = async () => {
    try {
      for (let i = 0; i < uploadOfficeHour.slot.length; i++) {
        await fetch(`${serverAddress}api/officeHour/edit`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: uploadOfficeHour.slot[i].id,
            facultyName: uploadOfficeHour.facultyName,
            facultyEmail: userEmail,
            startDate: uploadOfficeHour.startDate,
            endDate: uploadOfficeHour.endDate,
            day: dayConverter(uploadOfficeHour.slot[i].day),
            startTime: uploadOfficeHour.slot[i].startTime,
            endTime: uploadOfficeHour.slot[i].endTime,
            courseDepartment: uploadOfficeHour.department,
            courseNumber: uploadOfficeHour.courseNumber,
          }),
        });
      }
      navigate('/home')
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <div className="editPage">
      <UploadForm
        uploadOfficeHour={uploadOfficeHour}
        setUploadOfficeHour={setUploadOfficeHour}
        fetchHandler={fetchHandler}
        isFromEditPage={true}
      />
    </div>
  );
};

export default EditPage;
