export interface TaskData {
  task: string;
  project: string;
  date: number;
  id: string;
}

export interface ApiResponse {
  status: string;
  database: TaskData[];
}
