import { departmentOptions } from '../../models/departmentOptions';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KolynTextfield } from '../../styles';
import { KolynButton } from '../../styles';

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
    <div className="flex justify-center items-center min-h-screen">
      <div className="mx-auto w-[400px] p-6 rounded-lg shadow-lg flex flex-col gap-3.5 items-center border-black border-4">
        <select
          className="select select-bordered select-sm w-full max-w-xs w-full border-4 max-w-xs bg-base-100 h-10"
          defaultValue={"DEFAULT"}
          onChange={valueHandler}
          name="department"
        >
          <option value="DEFAULT" disabled>
            Select Course Department
          </option>
          {departmentOptions.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>

        <KolynTextfield
          textfieldType="text"
          placeholder="Course Number"
          value={undefined}
          onChange={valueHandler}
          name="courseNumber"
        />

        <KolynTextfield
          textfieldType="text"
          placeholder="Faculty Name"
          value={undefined}
          onChange={valueHandler}
          name="facultyName"
        />

        <DateTextField labelName="Start date" onChange={valueHandler} name="startDate" />

        <DateTextField labelName="End date" onChange={valueHandler} name="endDate" />
        <div className="h-2" />

        {uploadOfficeHour.slot.map((slot, index) => (
          <div className="flex w-full flex-col items-center border-4 rounded-lg p-6 mb-6" key={index}>
            <div className="flex mb-4">
              <div className="flex w-full justify-between items-center">
                <p>Office Hour slot #{index + 1}</p>
                {index !== 0 && (<KolynButton label="Delete Slot" isResponsive={false} onClick={() => deleteSlotHandler(index)}/>)}
              </div>
            </div>

            <div className="mb-4 w-full">
              <select
                className="select select-bordered select-sm w-full max-w-xs w-full border-4 max-w-xs bg-base-100 h-10"
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

            <div className="flex gap-2 mb- w-full">
              <input
                type="time"
                className="input input-bordered border-4 w-full max-w-xs"
                onChange={slotValueHandler(index, "startTime")}
                value={slot.startTime}
              />
              <input
                type="time"
                className="input input-bordered border-4 w-full max-w-xs"
                onChange={slotValueHandler(index, "endTime")}
                value={slot.endTime}
              />
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <KolynButton label="Add more slot" isResponsive={false} onClick={addSlotHandler}/>
          
          <Link to="/home">
            <KolynButton label="Cancel" isResponsive={false} onClick={undefined}/>
          </Link>

          <KolynButton label="Submit" isResponsive={false} onClick={submitHandler}/>
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
      <input type="date" placeholder="Date" className="input input-bordered w-full max-w-xs border-4" onChange={props.onChange} name={props.name} />
    </label>
  );
};

export default UploadForm;
