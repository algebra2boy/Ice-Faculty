import { departmentOptions } from '../../models/departmentOptions';
import { Slot, OfficeHour } from '../../models/officeHour.model';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { KolynTextfield2 } from '../../styles';
import { KolynButton } from '../../styles';

interface UploadFormProps {
  uploadOfficeHour: OfficeHour;
  setUploadOfficeHour: React.Dispatch<React.SetStateAction<OfficeHour>>;
  fetchHandler: () => Promise<boolean | undefined>;
  isFromEditPage: boolean;
}

// TODO: Why is this here?
export const dayConverter = (day: string): number => {
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

const UploadForm = (props: UploadFormProps) => {

  const { uploadOfficeHour, setUploadOfficeHour, fetchHandler } = props;

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
    newSlots.push({ id: "defaultID", day: "Monday", startTime: "", endTime: "" });
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
        id: "defaultID",
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

    const result = await fetchHandler();

    if (result === false || result === undefined) {
      alert("Error uploading office hour");
      return;
    }

    clearFormHandler();
  }

  const isFormEmpty = () => {
    console.log(uploadOfficeHour);
    return Object.values(uploadOfficeHour).some((value) => {
      if (Array.isArray(value)) {
        return value.some((item) => Object.values(item).some((val) => val === ""));
      }
      return value === "";
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={isMobile ? 
                      "mx-auto w-full p-6 shadow-lg flex flex-col gap-3.5 items-center" :
                      "mx-auto w-[400px] p-6 rounded-lg shadow-lg flex flex-col gap-3.5 items-center border-black border-4"}>
        <select
          className="select select-bordered select-sm w-full border-4 max-w-xs bg-base-100 h-10"
          onChange={valueHandler}
          name="department"
          value={uploadOfficeHour.department}
        >
          <option value="Select Course Department" disabled>
            Select Course Department
          </option>
          {departmentOptions.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>

        <KolynTextfield2
          textfieldType="text"
          placeholder="Course Number"
          value={uploadOfficeHour.courseNumber}
          onChange={valueHandler}
          name="courseNumber"
        />

        <KolynTextfield2
          textfieldType="text"
          placeholder="Faculty Name"
          value={uploadOfficeHour.facultyName}
          onChange={valueHandler}
          name="facultyName"
        />

        <DateTextField labelName="Start date" onChange={valueHandler} name="startDate" value={uploadOfficeHour.startDate} />

        <DateTextField labelName="End date" onChange={valueHandler} name="endDate" value={uploadOfficeHour.endDate} />
        <div className="h-2" />

        {uploadOfficeHour.slot.map((slot, index) => (
          <div className="flex w-full flex-col items-center border-4 rounded-lg p-6 mb-6" key={index}>
            <div className="flex mb-4">
              <div className="flex w-full justify-between items-center">
                <p>Office Hour slot #{index + 1}</p>
                {index !== 0 && (
                  <KolynButton
                    label="Delete Slot"
                    isResponsive={false}
                    onClick={() => deleteSlotHandler(index)}
                    bgColor="bg-errorColor"
                  />
                )}
              </div>
            </div>

            <div className="mb-4 w-full">
              <select
                className="select select-bordered select-sm w-full border-4 max-w-xs bg-base-100 h-10"
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
          <KolynButton label="Add more slot" isResponsive={false} onClick={addSlotHandler} bgColor="bg-checkBoxColor" />

          <Link to="/home">
            <KolynButton label="Cancel" isResponsive={false} onClick={undefined} bgColor="bg-errorColor" />
          </Link>

          <KolynButton label="Submit" isResponsive={false} onClick={submitHandler} bgColor="bg-mainColor" />
        </div>
      </div>
    </div>
  );
};

interface DateTextFieldProps {
  labelName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

const DateTextField = (props: DateTextFieldProps) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.labelName}</span>
      </div>
      <input
        type="date"
        placeholder="Date"
        className="input input-bordered w-full max-w-xs border-4"
        onChange={props.onChange} name={props.name}
        value={props.value}
      />
    </label>
  );
};

export default UploadForm;
