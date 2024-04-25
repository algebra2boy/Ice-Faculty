export interface Slot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface OfficeHour {
  id: string;
  department: string;
  courseNumber: string;
  startDate: string;
  endDate: string;
  facultyName: string;
  slot: Slot[];
}