import OfficeHourCard from "./OfficeHourCard";
import { OfficeHour } from "../../models/officeHour.model";

const OfficeHourGallery = () => {
  const tempOfficeHours: OfficeHour[] = [
    {
      id: "0c9d52a7-ec28-4bb9-8967-33af44b59508",
      department: "NUTR",
      courseNumber: "130",
      startDate: "2024-02-01",
      endDate: "2024-05-05",
      facultyName: "John Doe",
      slot: [
        {
          day: "Monday",
          startTime: "12:00",
          endTime: "13:00"
        },
        {
          day: "Tuesday",
          startTime: "11:00",
          endTime: "12:00"
        }
      ]
    },
    {
      id: "1a2b3c4d-5e6f-7g8h-9i10j11k12l",
      department: "COMPSCI",
      courseNumber: "101",
      startDate: "2024-03-01",
      endDate: "2024-06-05",
      facultyName: "Jane Smith",
      slot: [
        {
          day: "Wednesday",
          startTime: "14:00",
          endTime: "15:00"
        },
        {
          day: "Thursday",
          startTime: "13:00",
          endTime: "14:00"
        }
      ]
    },
    {
      id: "1a2b3c4d-5e6f-7g8h-9i10j11k12l",
      department: "COMPSCI",
      courseNumber: "101",
      startDate: "2024-03-01",
      endDate: "2024-06-05",
      facultyName: "Jane Smith",
      slot: [
        {
          day: "Wednesday",
          startTime: "14:00",
          endTime: "15:00"
        },
        {
          day: "Thursday",
          startTime: "13:00",
          endTime: "14:00"
        }
      ]
    },
    {
      id: "1a2b3c4d-5e6f-7g8h-9i10j11k12l",
      department: "COMPSCI",
      courseNumber: "101",
      startDate: "2024-03-01",
      endDate: "2024-06-05",
      facultyName: "Jane Smith",
      slot: [
        {
          day: "Wednesday",
          startTime: "14:00",
          endTime: "15:00"
        },
        {
          day: "Thursday",
          startTime: "13:00",
          endTime: "14:00"
        }
      ]
    },
  ];

  return (
    <div className="container w-full mx-auto flex justify-center">
      <div className="grid grid-cols-1 twoCards:grid-cols-2 threeCards:grid-cols-3 gap-8">
        {tempOfficeHours.map((officeHour: OfficeHour, i: number) => {
          return <OfficeHourCard key={i} {...officeHour} />;
        })}
      </div>
    </div>
  );
};

export default OfficeHourGallery;
