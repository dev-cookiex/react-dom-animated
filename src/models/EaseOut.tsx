import CubicBezier from './CubicBezier'
import Value from './Value'

class EaseOut extends CubicBezier {
  constructor( value: Value, to: number, duration: number, type: EaseOut.Types = 'sine' ) {
    super( EaseOut.types[type], value, to, duration )
  }
}

namespace EaseOut {
  export type Types = 'sine' | 'quad' | 'cubic' | 'quart' | 'quint' | 'expo' | 'circ' | 'back'
  export const types: { [K in Types]: CubicBezier.Bezier } = {
    sine: [ 0.61, 1, 0.88, 1 ],
    quad: [ 0.5, 1, 0.89, 1 ],
    cubic: [ 0.33, 1, 0.68, 1 ],
    quart: [ 0.25, 1, 0.5, 1 ],
    quint: [ 0.22, 1, 0.36, 1 ],
    expo: [ 0.16, 1, 0.3, 1 ],
    circ: [ 0, 0.55, 0.45, 1 ],
    back: [ 0.34, 1.56, 0.64, 1 ]
  }
}

export = EaseOut
