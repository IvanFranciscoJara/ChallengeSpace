export type color = 'blue' | 'red' | 'purple' | 'white'

export type direction = 'up' | 'down' | 'right' | 'left'

export type itemType = 'POLYANET' | 'SOOLON' | 'COMETH'

export type formatedItemType = {
  type: 0 | 1 | 2
  color?: 'blue' | 'red' | 'purple' | 'white'
  direction?: 'up' | 'down' | 'right' | 'left'
} | null
