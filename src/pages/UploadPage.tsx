import { useState, useContext } from "react";
import UploadForm from "../components/uploadComponents/UploadOHForm";
import { OfficeHour } from "../models/officeHour.model";
import { dayConverter } from "../components/uploadComponents/UploadOHForm";
import { UserContext } from "../components/UserProvider";

const UploadPage = () => {
  const { userEmail } = useContext(UserContext);

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
        console.log("fetching", i);
        await fetch("http://localhost:8080/api/officeHour/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
