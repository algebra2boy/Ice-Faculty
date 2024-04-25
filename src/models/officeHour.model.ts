export interface OfficeHourInfo {
  id: string;
  facultyName: string;
  startDate: string;
  endDate: string;
  day: number;
  startTime: string;
  endTime: string;
  courseDepartment: string;
  courseNumber: string;
}

export interface Slot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface OfficeHour {
  department: string;
  courseNumber: string;
  startDate: string;
  endDate: string;
  facultyName: string;
  slot: Slot[];
}