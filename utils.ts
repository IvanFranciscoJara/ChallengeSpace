import { color, direction, formatedItemType } from './types'

type formatGoalItemProps = (item: string) => formatedItemType

export const formatGoalItem: formatGoalItemProps = (item) => {
  if (item.split('_')[0] === 'SPACE') {
    return null
  }
  if (item.split('_')[0] === 'POLYANET') {
    return { type: 0 }
  }
  if (item.split('_')[1] === 'SOLOON') {
    return { type: 1, color: item.split('_')[0].toLowerCase() as color }
  }
  if (item.split('_')[1] === 'COMETH') {
    return { type: 2, direction: item.split('_')[0].toLowerCase() as direction }
  }
  return null
}

export const matchTheGoal = (goalFormatedItem: formatedItemType, myMapItem: formatedItemType) => {
  if (goalFormatedItem === null && myMapItem === null) {
    return true
  }
  if (goalFormatedItem?.type === 0 && myMapItem?.type === 0) {
    return true
  }
  if (
    goalFormatedItem?.type === 1 &&
    goalFormatedItem?.type === myMapItem?.type &&
    goalFormatedItem?.color === myMapItem?.color
  ) {
    return true
  }
  if (
    goalFormatedItem?.type === 2 &&
    goalFormatedItem?.type === myMapItem?.type &&
    goalFormatedItem?.direction === myMapItem?.direction
  ) {
    return true
  }
  return false
}
