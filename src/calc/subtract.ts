import AnimationListener from '../models/AnimationListener'
import BaseCalc from '../models/BaseCalc'

export class AnimationSubtract extends BaseCalc {
  constructor(
    a: number | AnimationListener<number>,
    b: number | AnimationListener<number>
  ) {
    super( ( a, b ) => a - b, a, b )
  }
}

const subtract = ( a: number | AnimationListener<number>, b: number | AnimationListener<number> ) =>
  new AnimationSubtract( a, b )

export default subtract
