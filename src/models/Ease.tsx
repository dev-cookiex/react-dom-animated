/* eslint-disable max-params */
import CubicBezier from './CubicBezier'
import EaseIn from './EaseIn'
import EaseInOut from './EaseInOut'
import EaseOut from './EaseOut'
import Value from './Value'

class Ease extends CubicBezier {
  constructor(
    value: Value,
    to: number,
    duration: number,
    type: Ease.Types = 'in-out',
    subType: Ease.SubTypes = 'sine'
  ) {
    super( Ease.types[type].types[subType], value, to, duration )
  }
}

namespace Ease {
  export type Types = 'in' | 'out' | 'in-out'
  export type SubTypes = 'sine' | 'quad' | 'cubic' | 'quart' | 'quint' | 'expo' | 'circ' | 'back'
  export const types = {
    in: EaseIn,
    out: EaseOut,
    'in-out': EaseInOut
  }
}

export = Ease
