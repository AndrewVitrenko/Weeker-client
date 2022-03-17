export interface ITask {
  id: string;
  text: string;
  day: string;
  time: {
    start: string;
    end: string;
  };
  backgroundColor?: string;
}

export interface IStore {
  token: string;
  tasks: ITask[];
  error: string | null;
  focusedTime: string | null;
  currentWeek: {
    start: string;
    end: string;
  };
}
