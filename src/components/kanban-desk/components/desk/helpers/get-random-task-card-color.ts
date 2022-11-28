import { cardColors } from "../constants/card-colors"
import { getRandomInt } from "./get-random-int"

export const getRandomColor = () => {
    return cardColors[getRandomInt(cardColors.length - 1)]
}


