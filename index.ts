import { setItem, removeItem, getGoal, getMyMap } from './requests'
import { formatGoalItem, matchTheGoal } from './utils'
import { formatedItemType, itemType } from './types'

export const itemTypeEnum = {
  0: 'POLYANET',
  1: 'SOOLON',
  2: 'COMETH',
}

const fillMatrix = async () => {
  const goal = await getGoal()
  const myMap = await getMyMap()

  if (!goal || !myMap) {
    console.log('API not available')
    return
  }

  let itemGoalFormated: formatedItemType

  for (let i = 0; i < goal.length; i++) {
    for (let j = 0; j < goal[i].length; j++) {
      itemGoalFormated = formatGoalItem(goal[i][j])

      if (!matchTheGoal(itemGoalFormated, myMap[i][j])) {
        if (itemGoalFormated === null) {
          await removeItem({
            type: itemTypeEnum[myMap[i][j]?.type as 0 | 1 | 2] as itemType,
            row: i,
            column: j,
            color: myMap[i][j]?.color,
            direction: myMap[i][j]?.direction,
          })
        } else {
          await setItem({
            type: itemTypeEnum[itemGoalFormated.type] as itemType,
            row: i,
            column: j,
            color: itemGoalFormated.color,
            direction: itemGoalFormated.direction,
          })
        }
      }
    }
  }
}

try {
  fillMatrix()
} catch (error) {
  console.log({ error })
}
