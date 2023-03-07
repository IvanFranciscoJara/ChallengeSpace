import axios from 'axios'
import { color, direction, formatedItemType, itemType } from './types'

const CANDIDATE_ID = '0ad2b0f0-ba77-4cca-8fda-07893e30e5c1'
const BASE_URL = 'https://challenge.crossmint.io/'
const GOAL = `api/map/${CANDIDATE_ID}/goal`
const MY_MAP = `api/map/${CANDIDATE_ID}`

interface setItemProps {
  type: itemType
  row: number
  column: number
  color?: color
  direction?: direction
}

const itemType = {
  POLYANET: { api: 'api/polyanets', type: 0 },
  SOOLON: { api: 'api/soloons', type: 1 },
  COMETH: { api: 'api/comeths', type: 2 },
}

export const setItem = async ({ type, row, column, color, direction }: setItemProps) => {
  try {
    await axios.post(BASE_URL + itemType[type].api, {
      candidateId: CANDIDATE_ID,
      row,
      column,
      color,
      direction,
    })
  } catch (error) {
    console.log('setItem', { error })
  }
}

export const removeItem = async ({ type, row, column, color, direction }: setItemProps) => {
  try {
    await axios({
      method: 'delete',
      url: BASE_URL + itemType[type].api,
      data: { candidateId: CANDIDATE_ID, row, column, color, direction },
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log('removeItem', { error })
  }
}

export const getGoal = async () => {
  try {
    const res = await axios.get<{ goal: string[][] }>(BASE_URL + GOAL)
    return res?.data?.goal
  } catch (error) {
    console.log('getGoal', error)
  }
}

export const getMyMap = async () => {
  try {
    const res = await axios.get<{ map: { content: formatedItemType[][] } }>(BASE_URL + MY_MAP)
    return res?.data?.map?.content
  } catch (error) {
    console.log('getMyMap', error)
  }
}
