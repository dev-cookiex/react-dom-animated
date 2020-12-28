import AnimationListener from '../models/AnimationListener'
import BaseCalc from '../models/BaseCalc'

export class AnimationAdd extends BaseCalc {
  constructor(
    a: number | AnimationListener<number>,
    b: number | AnimationListener<number>
  ) {
    super( ( a, b ) => a + b, a, b )
  }
}

const add = ( a: number | AnimationListener<number>, b: number | AnimationListener<number> ) =>
  new AnimationAdd( a, b )

export default add
