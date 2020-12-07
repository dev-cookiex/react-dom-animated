import CubicBezier from './CubicBezier'
import Value from './Value'

class EaseInOut extends CubicBezier {
  constructor( value: Value, to: number, duration: number, type: EaseInOut.Types = 'sine' ) {
    super( EaseInOut.types[type], value, to, duration )
  }
}

namespace EaseInOut {
  export type Types = 'sine' | 'quad' | 'cubic' | 'quart' | 'quint' | 'expo' | 'circ' | 'back'
  export const types: { [K in Types]: CubicBezier.Bezier } = {
    sine: [ 0.37, 0, 0.63, 1 ],
    quad: [ 0.45, 0, 0.55, 1 ],
    cubic: [ 0.65, 0, 0.35, 1 ],
    quart: [ 0.76, 0, 0.24, 1 ],
    quint: [ 0.83, 0, 0.17, 1 ],
    expo: [ 0.87, 0, 0.13, 1 ],
    circ: [ 0.85, 0, 0.15, 1 ],
    back: [ 0.68, -0.6, 0.32, 1.6 ]
  }
}

export = EaseInOut
