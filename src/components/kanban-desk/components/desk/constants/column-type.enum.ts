export enum ColumnType {
    NewTask = 'new-task',
    Scheduled = 'scheduled',
    InProgress = 'in-progress',
    Completed = 'completed',
}

export const columnTypeName = {
    [ColumnType.NewTask]:'New task',
    [ColumnType.Scheduled]:'Scheduled',
    [ColumnType.InProgress]:'In progress',
    [ColumnType.Completed]:'Completed'
}
