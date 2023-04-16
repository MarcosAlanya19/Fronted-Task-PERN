export interface ITaskData {
  id: string;
  title: string;
  description: string;
}

export type TTaskForm = Omit<ITaskData, 'id'>;
