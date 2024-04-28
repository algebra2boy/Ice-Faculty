import OfficeHourCard from "./OfficeHourCard";
import { OfficeHour } from "../../models/officeHour.model";

const OfficeHourGallery = () => {
  const tempOfficeHours: OfficeHour[] = [
    {
      id: "2e65e8f0-f5a4-476e-b4c0-c07b87efb86e",
      department: "ACCTG",
      courseNumber: "230",
      startDate: "2024-04-02",
      endDate: "2024-04-18",
      facultyName: "Yongye Tan",
      slot: [
        {
          day: "Monday",
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
    }
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
