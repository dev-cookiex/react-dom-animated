import AnimationListener from '../models/AnimationListener'
import BaseCalc from '../models/BaseCalc'

export class AnimationMultiply extends BaseCalc {
  constructor(
    a: number | AnimationListener<number>,
    b: number | AnimationListener<number>
  ) {
    super( ( a, b ) => a * b, a, b )
  }
}

const multiply = ( a: number | AnimationListener<number>, b: number | AnimationListener<number> ) =>
  new AnimationMultiply( a, b )

export default multiply
