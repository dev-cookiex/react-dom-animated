import bezierAlgorithm from '../algorithms/cubic-bezier'
import Animation from './Animation'
import Value from './Value'

class CubicBezier extends Animation {
  constructor( private bezier: CubicBezier.Bezier, ...args: [ value: Value, to: number, duration: number ] ) {
    super( ...args )
  }
  protected algorithm = ( time: number ) => {
    const [ x1, y1, x2, y2 ] = this.bezier
    return bezierAlgorithm( x1, y1, x2, y2 )( time / this.duration )
  }
}

namespace CubicBezier {
  export type Bezier = [ x1: number, y1: number, x2: number, y2: number ]
}

export default CubicBezier
