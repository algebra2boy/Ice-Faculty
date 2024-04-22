import { departmentOptions } from '../models/departmentOptions';
import { useState } from 'react';

interface Slot {
  day: String;
  startTime: String;
  endTime: String;
}

const UploadPage = () => {

  const [uploadOfficeHour, setUploadOfficeHour] = useState({
    department: "",
    courseNumber: "",
    startDate: "",
    endDate: "",
    facultyName: "",
    slot: [{
      day: "",
      startTime: "",
      endTime: ""
    }] as Slot[]
  });

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUploadOfficeHour({ ...uploadOfficeHour, [name]: value });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="mx-auto w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-3.5 items-center">
        {JSON.stringify(uploadOfficeHour)}
        <select className="select select-bordered select-sm w-full max-w-xs" defaultValue={"DEFAULT"} onChange={valueHandler} name="department">
          <option value="DEFAULT" disabled>Course Department</option>
          {departmentOptions.map((department: string, index: number) =>
            <option key={index} value={department}>{department}</option>)
          }
        </select>

        <input type="text" placeholder="Course Number" className="input input-bordered w-full max-w-xs" onChange={valueHandler} name="courseNumber" />

        <DateTextField labelName="Start date" onChange={valueHandler} name="startDate" />

        <DateTextField labelName="End date" onChange={valueHandler} name="endDate" />

        <input type="text" placeholder="Faculty Name" className="input input-bordered w-full max-w-xs" onChange={valueHandler} name="facultyName" />

        <div className="mb-6">

          <div className="flex justify-between mb-4">
            <div className="flex w-full justify-between items-center">
              <p>Office Hour slot #1</p>
              <button className="btn btn-error btn-sm">Delete Slot</button>
            </div>
          </div>

          <div className="mb-4">
            <select className="select select-bordered select-sm w-full max-w-xs" >
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                <option key={index} value={day}>{day}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 mb-">
            <input type="time" className="input input-bordered w-full max-w-xs" />
            <input type="time" className="input input-bordered w-full max-w-xs" />
          </div>

        </div>

      </div>
    </div>
  );
};

interface DateTextFieldProps {
  labelName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const DateTextField = (props: DateTextFieldProps) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.labelName}</span>
      </div>
      <input type="date" placeholder="Date" className="input input-bordered w-full max-w-xs" onChange={props.onChange} name={props.name} />
    </label>
  );
};

export default UploadPage;
