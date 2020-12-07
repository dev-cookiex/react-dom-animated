import { useMemo, useRef } from 'react'

import Value from '../models/Value'

const useAnimationValue = ( value: number ) => {
  return useRef(
    useMemo( () => new Value( value ), [ value ] ) 
  ).current
}

export default useAnimationValue
