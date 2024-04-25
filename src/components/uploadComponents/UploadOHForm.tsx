import { departmentOptions } from '../../models/departmentOptions';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Slot {
  day: string;
  startTime: string;
  endTime: string;
}

const UploadForm = () => {

  const [uploadOfficeHour, setUploadOfficeHour] = useState({
    department: "",
    courseNumber: "",
    startDate: "",
    endDate: "",
    facultyName: "",
    slot: [{
      day: "Monday",
      startTime: "",
      endTime: ""
    }] as Slot[]
  });

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUploadOfficeHour({ ...uploadOfficeHour, [name]: value });
  }

  const slotValueHandler = (index: number, field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newSlots = [...uploadOfficeHour.slot];
    newSlots[index][field as keyof Slot] = event.target.value;
    setUploadOfficeHour({ ...uploadOfficeHour, slot: newSlots });
  }

  const addSlotHandler = () => {
    const newSlots = [...uploadOfficeHour.slot];
    newSlots.push({ day: "Monday", startTime: "", endTime: "" });
    setUploadOfficeHour({ ...uploadOfficeHour, slot: newSlots });
  }

  const deleteSlotHandler = (index: number) => {
    const newSlots = [...uploadOfficeHour.slot];
    const filteredSlots = newSlots.filter((_, i) => i !== index);
    setUploadOfficeHour({ ...uploadOfficeHour, slot: filteredSlots });
  }

  const clearFormHandler = () => {
    setUploadOfficeHour({
      department: "",
      courseNumber: "",
      startDate: "",
      endDate: "",
      facultyName: "",
      slot: [{
        day: "Monday",
        startTime: "",
        endTime: ""
      }]
    });
  }

  const submitHandler = async () => {

    if (isFormEmpty()) {
      alert("Please fill in all fields");
      return;
    }

    const dayConverter = (day: string): number => {
      switch (day) {
        case "Monday":
          return 0;
        case "Tuesday":
          return 1;
        case "Wednesday":
          return 2;
        case "Thursday":
          return 3;
        case "Friday":
          return 4;
        case "Saturday":
          return 5;
        case "Sunday":
          return 6;
        default:
          return -1;
      }
    }

    try {
      for (let i = 0; i < uploadOfficeHour.slot.length; i++) {
        await fetch("http://localhost:8080/api/officeHour/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
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
    } catch (error) {
      console.error(error);
    }

    clearFormHandler();
  }

  const isFormEmpty = () => {
    return Object.values(uploadOfficeHour).some((value) => {
      if (Array.isArray(value)) {
        return value.some((item) => Object.values(item).some((val) => val === ""));
      }
      return value === "";
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="mx-auto w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-3.5 items-center">
        <select
          className="select select-bordered select-md w-full max-w-xs"
          defaultValue={"DEFAULT"}
          onChange={valueHandler}
          name="department"
        >
          <option value="DEFAULT" disabled>
            Course Department
          </option>
          {departmentOptions.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Course Number"
          className="input input-bordered w-full max-w-xs"
          onChange={valueHandler}
          name="courseNumber"
        />

        <DateTextField labelName="Start date" onChange={valueHandler} name="startDate" />

        <DateTextField labelName="End date" onChange={valueHandler} name="endDate" />

        <input
          type="text"
          placeholder="Faculty Name"
          className="input input-bordered w-full max-w-xs"
          onChange={valueHandler}
          name="facultyName"
        />

        {uploadOfficeHour.slot.map((slot, index) => (
          <div className="mb-6" key={index}>
            <div className="flex mb-4">
              <div className="flex w-full justify-between items-center">
                <p>Office Hour slot #{index + 1}</p>
                {index !== 0 && (
                  <button className="btn btn-error btn-sm" onClick={() => deleteSlotHandler(index)}>
                    Delete Slot
                  </button>
                )}
              </div>
            </div>

            <div className="mb-4">
              <select
                className="select select-bordered select-sm w-full max-w-xs"
                onChange={slotValueHandler(index, "day")}
                value={slot.day}
              >
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2 mb-">
              <input
                type="time"
                className="input input-bordered w-full max-w-xs"
                onChange={slotValueHandler(index, "startTime")}
                value={slot.startTime}
              />
              <input
                type="time"
                className="input input-bordered w-full max-w-xs"
                onChange={slotValueHandler(index, "endTime")}
                value={slot.endTime}
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between gap-4">
          <button className="btn btn-sm" onClick={addSlotHandler}>
            Add more slot
          </button>
          <Link to="/home">
            <button className="btn btn-sm btn-warning">Cancel</button>
          </Link>
          <button className="btn btn-sm btn-info" onClick={submitHandler}>
            Submit
          </button>
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

export default UploadForm;
