import TaskData from './taskData.js';
export default interface ApiResponse {
  status: string;
  database: TaskData[];
}
