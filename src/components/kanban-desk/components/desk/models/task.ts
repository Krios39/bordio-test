import {ColumnType} from "../constants/column-type.enum";

export interface Task {
    id: number,
    name: string,
    durationInMinutes: number,
    column: ColumnType,
    color: TaskColor
}

export interface TaskColor {
    background: string,
    time: string,
}