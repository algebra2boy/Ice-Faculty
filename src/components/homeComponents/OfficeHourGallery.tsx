import OfficeHourCard from "./OfficeHourCard";
import { OfficeHour } from "../../models/officeHour.model";

const OfficeHourGallery = () => {
  const tempOfficeHours: OfficeHour[] = [
    {
      department: "Labor",
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
