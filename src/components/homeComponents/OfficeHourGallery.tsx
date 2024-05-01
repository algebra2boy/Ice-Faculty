import OfficeHourCard from "./OfficeHourCard";
import { OfficeHour, Slot } from "../../models/officeHour.model";
import { UserContext } from "../UserProvider";
import { useContext, useEffect, useState } from "react";
import { FetchedOfficeHour } from "../../models/officeHour.model";

const OfficeHourGallery = () => {
  const serverAddress = "https://ba36-2601-19b-4100-7290-e183-8a9-6ee1-d011.ngrok-free.app/";
  const { userEmail } = useContext(UserContext);

  const [officeHourList, setOfficeHourList] = useState<OfficeHour[]>([]);
  const [errorMsg, setErrorMsg] = useState(""); // Display any error detected from fetching

  function partitionOfficeHours(array: FetchedOfficeHour[]): Record<string, FetchedOfficeHour[]> {
    const partitions: Record<string, FetchedOfficeHour[]> = {};

    array.forEach((obj: FetchedOfficeHour) => {
      // Split office hours into partitions with the same key consist of startDate, endDate, courseDepartment, and courseNumber
      // "#splitter#" is used for extracting the these key properties back when creating slots
      const key = `${obj.startDate}#splitter#${obj.endDate}#splitter#${obj.courseDepartment}#splitter#${obj.courseNumber}`;

      // Add the office hours with the same key properties to the same partition
      if (!partitions[key]) {
        partitions[key] = [];
      }
      partitions[key].push(obj);
    });

    return partitions;
  }

  function numDayConverter(day: number): string {
    switch (day) {
      case 0:
        return "Monday";
      case 1:
        return "Tuesday";
      case 2:
        return "Wednesday";
      case 3:
        return "Thursday";
      case 4:
        return "Friday";
      case 5:
        return "Saturday";
      case 6:
        return "Sunday";
      default:
        return "";
    }
  }

  useEffect(() => {
    const fetchOfficeHourList = async () => {
      try {
        const response = await fetch(`${serverAddress}/api/officeHour/list?email=${userEmail}&isTeacher=${true}`, {
          method: "GET",
        });

        console.log(response)

        const serverResponse = await response.json();

        console.log(serverResponse)

        if (serverResponse.status === "success" && response.ok) {
          const officeHours = serverResponse.officeHours;

          // Convert the day (number type) attribute of office hour from the fetched list to string type
          const stringDayOfficeHours = officeHours.map((officeHour: FetchedOfficeHour) => ({
            ...officeHour,
            day: numDayConverter(officeHour.day),
          }));

          // Split all office hours into partitions where the office hour with same startDate, endDate,
          // courseDepartment, and courseNumber go to the same partition
          const partitionedOfficeHours = partitionOfficeHours(stringDayOfficeHours);

          // Use the partitions to generate office hour list with slots
          const officeHoursWithSlots = getOfficeHoursWithSlots(partitionedOfficeHours);
          setOfficeHourList(officeHoursWithSlots);
        } else if (serverResponse.status) {
          setErrorMsg(serverResponse.message);
        } else {
          // edge cases
          setErrorMsg("An error has occurred, please try again later.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    function getOfficeHoursWithSlots(partitionedOfficeHours: Record<string, FetchedOfficeHour[]>): OfficeHour[] {
      return Object.keys(partitionedOfficeHours).map((key) => {
        const [startDate, endDate, facultyName, courseDepartment, courseNumber] = key.split("#splitter#");
        const slots: Slot[] = [];
        partitionedOfficeHours[key].forEach((slot) => {
          slots.push({ id: slot.id, day: numDayConverter(slot.day), startTime: slot.startTime, endTime: slot.endTime });
        });
        return { startDate, endDate, facultyName, department: courseDepartment, courseNumber, slot: slots };
      });
    }
    
    fetchOfficeHourList();
  }, [userEmail]);

  return (
    <div className="container w-full mx-auto flex justify-center">
      {errorMsg ? (
        <div className="m-auto text-errorColor">{errorMsg}</div>
      ) : (
        <div className="grid grid-cols-1 twoCards:grid-cols-2 threeCards:grid-cols-3 gap-8">
          {officeHourList.map((officeHour: OfficeHour, i: number) => {
            return <OfficeHourCard key={i} {...officeHour} />;
          })}
        </div>
      )}
    </div>
  );
};

export default OfficeHourGallery;
