import OfficeHourCard from "./OfficeHourCard";
import { OfficeHourInfo } from "../../models/officeHour.model";

const OfficeHourGallery = () => {
  const tempOfficeHours: OfficeHourInfo[] = [
    {
      id: "0c9d52a7-ec28-4bb9-8967-33af44b59508",
      facultyName: "John Doe",
      startDate: "2024-02-01",
      endDate: "2024-05-05",
      day: 2,
      startTime: "12:00",
      endTime: "13:00",
      courseDepartment: "NUTR",
      courseNumber: "130",
    },
    {
      id: "3c0c454d-595d-4682-b68b-f0d24ce3e0e5",
      facultyName: "Jenny Green",
      startDate: "2024-02-02",
      endDate: "2024-05-06",
      day: 3,
      startTime: "15:30",
      endTime: "16:30",
      courseDepartment: "MKTG",
      courseNumber: "301",
    },
    {
      id: "347998b1-79d0-4fed-bb14-34ade27120a2",
      facultyName: "Tom Cook",
      startDate: "2024-02-03",
      endDate: "2024-05-06",
      day: 4,
      startTime: "08:30",
      endTime: "09:30",
      courseDepartment: "ENGL",
      courseNumber: "112",
    },
    {
      id: "edb873bb-8d6a-48fd-8295-69e62f524358",
      facultyName: "Jake Green",
      startDate: "2024-02-03",
      endDate: "2024-05-06",
      day: 3,
      startTime: "10:00",
      endTime: "11:00",
      courseDepartment: "HIST",
      courseNumber: "230",
    },
    {
      id: "60bb97c0-c19a-4bed-a33d-51343827b0fe",
      facultyName: "Andrew Rice",
      startDate: "2024-02-05",
      endDate: "2024-05-10",
      day: 2,
      startTime: "18:00",
      endTime: "19:00",
      courseDepartment: "FDSCI",
      courseNumber: "150",
    },
  ];

  return (
    <div className="container w-full mx-auto p-8">
      <div className="grid grid-cols-1 twoCards:grid-cols-2 threeCards:grid-cols-3 gap-8">
        {tempOfficeHours.map((officeHour: OfficeHourInfo, i: number) => {
          return <OfficeHourCard key={i} {...officeHour} />;
        })}
      </div>
    </div>
  );
};

export default OfficeHourGallery;
