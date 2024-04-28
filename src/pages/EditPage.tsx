import UploadForm from "../components/uploadComponents/UploadOHForm";
import { useState } from "react";
import { OfficeHour } from "../models/officeHour.model";
import { dayConverter } from "../components/uploadComponents/UploadOHForm";
import { useLocation } from "react-router-dom";

const EditPage = () => {

  const { state } = useLocation();
  const officeHour = state.officeHour;

  const [uploadOfficeHour, setUploadOfficeHour] = useState<OfficeHour>(officeHour);

  const fetchHandler = async () => {
    try {
      for (let i = 0; i < uploadOfficeHour.slot.length; i++) {
        await fetch("http://localhost:8080/api/officeHour/edit", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "id": uploadOfficeHour.id,
            "facultyName": uploadOfficeHour.facultyName,
            "startDate": uploadOfficeHour.startDate,
            "endDate": uploadOfficeHour.endDate,
            "day": dayConverter(uploadOfficeHour.slot[i].day),
            "startTime": uploadOfficeHour.slot[i].startTime,
            "endTime": uploadOfficeHour.slot[i].endTime,
            "courseDepartment": uploadOfficeHour.department,
            "courseNumber": uploadOfficeHour.courseNumber,
          })
        });
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return <div className="editPage">
    <UploadForm
      uploadOfficeHour={uploadOfficeHour}
      setUploadOfficeHour={setUploadOfficeHour}
      fetchHandler={fetchHandler}
      isFromEditPage={true}
    />

  </div>;
};

export default EditPage;
