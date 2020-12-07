import Animation from './models/Animation'
import Ease from './models/Ease'
import Value from './models/Value'

const timing = (
  value: Value, duration: number, to: number,
  {
    easing = ( v, d, t ) => new Ease( v, t, d )
  }: timing.Configuration = {}
) => {
  return easing( value, duration, to )
}

namespace timing {
  export interface Configuration {
    easing?: ( value: Value, duration: number, to: number ) => Animation
  }
}

export = timing
