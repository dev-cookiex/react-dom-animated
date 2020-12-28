import AnimationListener from '../models/AnimationListener'
import BaseCalc from '../models/BaseCalc'

export class AnimationDivide extends BaseCalc {
  constructor(
    a: number | AnimationListener<number>,
    b: number | AnimationListener<number>
  ) {
    super( ( a, b ) => a / b, a, b )
  }
}

const divide = ( a: number | AnimationListener<number>, b: number | AnimationListener<number> ) =>
  new AnimationDivide( a, b )

export default divide
