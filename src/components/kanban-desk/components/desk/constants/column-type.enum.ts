export enum ColumnType {
    NewTask = 'new-task',
    Scheduled = 'scheduled',
    InProgress = 'in-progress',
    Completed = 'completed',
}

export const columnTypeName = {
    [ColumnType.NewTask]:'New Task',
    [ColumnType.Scheduled]:'Scheduled',
    [ColumnType.InProgress]:'In Progress',
    [ColumnType.Completed]:'Completed'
}
