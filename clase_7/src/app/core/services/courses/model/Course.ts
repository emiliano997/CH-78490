export interface Course {
  id: number | string;
  title: string;
  description: string;
  beginDate: Date;
  endDate: Date;
  status: CourseStatus;
}

export enum CourseStatus {
  STARTED = 'STARTED',
  SCHEDULED = 'SCHEDULED',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
}

export const courseColumns: string[] = [
  'id',
  'title',
  'description',
  'beginDate',
  'endDate',
  'status',
  'actions',
];
