import { useState, useContext } from "react";
import UploadForm from "../components/uploadComponents/UploadOHForm";
import { useNavigate } from "react-router-dom";
import { OfficeHour } from "../models/officeHour.model";
import { dayConverter } from "../components/uploadComponents/UploadOHForm";
import { UserContext } from "../components/UserProvider";
import { serverAddress } from "../serverAddress.config";

const UploadPage = () => {
  const { userEmail } = useContext(UserContext);
  const navigate = useNavigate()

  const [uploadOfficeHour, setUploadOfficeHour] = useState<OfficeHour>({
    department: "",
    courseNumber: "",
    startDate: "",
    endDate: "",
    facultyName: "",
    slot: [{
      id: "defaultID",
      day: "Monday",
      startTime: "",
      endTime: ""
    }]
  });

  const fetchHandler = async (): Promise<boolean | undefined> => {
    // Prevent non-signed in user from uploading office hour
    if (!userEmail) {
      alert("Please log in first");
      return;
    }

    try {
      for (let i = 0; i < uploadOfficeHour.slot.length; i++) {
        await fetch(`${serverAddress}api/officeHour/upload`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            facultyEmail: userEmail,
            facultyName: uploadOfficeHour.facultyName,
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
  }

  return (
    <div className="uploadpage">
      <UploadForm
        uploadOfficeHour={uploadOfficeHour}
        setUploadOfficeHour={setUploadOfficeHour}
        fetchHandler={fetchHandler}
        isFromEditPage={false}
      />
    </div>
  );

}

export default UploadPage;
