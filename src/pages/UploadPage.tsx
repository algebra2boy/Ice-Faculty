import { departmentOptions } from '../models/departmentOptions';
import { useState } from 'react';

const UploadPage = () => {

  const [uploadOfficeHour, setUploadOfficeHour] = useState({
    department: "",
    courseNumber: "",
    startDate: "",
    endDate: "",
    facultyName: ""
  });

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUploadOfficeHour({ ...uploadOfficeHour, [name]: value });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="mx-auto w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-3 items-center">

        <select className="select select-bordered select-sm w-full max-w-xs" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>Course Department</option>
          {departmentOptions.map((department: string, index: number) => <option key={index}>{department}</option>)}
        </select>

        <input type="text" placeholder="Course Number" className="input input-bordered w-full max-w-xs" />

        <DateTextField labelName="Start date" />

        <DateTextField labelName="End date" />

        <input type="text" placeholder="Faculty Name" className="input input-bordered w-full max-w-xs" />

      </div>
    </div>
  );
};

const DateTextField = (props: { labelName: string }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.labelName}</span>
      </div>
      <input type="date" placeholder="Date" className="input input-bordered w-full max-w-xs" />
    </label>
  );
};

export default UploadPage;
