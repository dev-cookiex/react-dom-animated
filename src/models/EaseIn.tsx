import CubicBezier from './CubicBezier'
import Value from './Value'

class EaseIn extends CubicBezier {
  constructor( value: Value, to: number, duration: number, type: EaseIn.Types = 'sine' ) {
    super( EaseIn.types[type], value, to, duration )
  }
}

namespace EaseIn {
  export type Types = 'sine' | 'quad' | 'cubic' | 'quart' | 'quint' | 'expo' | 'circ' | 'back'
  export const types: { [K in Types]: CubicBezier.Bezier } = {
    sine: [ 0.12, 0, 0.39, 0 ],
    quad: [ 0.11, 0, 0.5, 0 ],
    cubic: [ 0.32, 0, 0.67, 0 ],
    quart: [ 0.5, 0, 0.75, 0 ],
    quint: [ 0.64, 0, 0.78, 0 ],
    expo: [ 0.7, 0, 0.84, 0 ],
    circ: [ 0.55, 0, 1, 0.45 ],
    back: [ 0.36, 0, 0.66, -0.56 ]
  }
}

export = EaseIn
