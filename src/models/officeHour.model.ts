export interface Slot {
  id: string;
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

export interface OfficeHourWithRenderHandler {
  department: string;
  courseNumber: string;
  startDate: string;
  endDate: string;
  facultyName: string;
  slot: Slot[];
  reRenderHandler: () => void;
}

export interface FetchedOfficeHour {
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