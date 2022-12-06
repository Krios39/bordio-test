import { taskColors } from "../constants/task-colors"
import { getRandomInt } from "./get-random-int"
import {TaskColor} from "../models/task";

export const getRandomColor = (): TaskColor => {
    return taskColors[getRandomInt(taskColors.length - 1)]
}


