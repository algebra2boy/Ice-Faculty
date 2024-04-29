import OfficeHourCard from "./OfficeHourCard";
import { OfficeHour } from "../../models/officeHour.model";

const OfficeHourGallery = () => {
  const tempOfficeHours: OfficeHour[] = [
    {
      department: "Labor Relations",
      courseNumber: "230",
      startDate: "2024-04-14",
      endDate: "2024-04-05",
      facultyName: "Labor",
      slot: [
        {
          id: "660e70b8-da43-4397-ad38-0e8aadca97f6",
          day: "Monday",
          startTime: "13:30",
          endTime: "14:30"
        },
        {
          id: "d72923f6-bc7c-47db-b5b1-2e658c6c458b",
          day: "Wednesday",
          startTime: "13:30",
          endTime: "14:30"
        },
        {
          id: "22341304-c4a4-49e1-a77b-a4ff63f9b7c9",
          day: "Friday",
          startTime: "13:30",
          endTime: "14:30"
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
