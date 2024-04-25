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
      slot: [{
        day: "Monday",
        startTime: "12:00",
        endTime: "13:00"
      }]
    },
  ];

  return (
    <div className="container w-full mx-auto p-8">
      <div className="grid grid-cols-1 twoCards:grid-cols-2 threeCards:grid-cols-3 gap-8">
        {tempOfficeHours.map((officeHour: OfficeHour, i: number) => {
          return <OfficeHourCard key={i} {...officeHour} />;
        })}
      </div>
    </div>
  );
};

export default OfficeHourGallery;
