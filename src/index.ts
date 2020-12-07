/* eslint-disable @typescript-eslint/no-unused-vars */
import AnimatedAnimation from './components/Animation'
import animatedUseAnimationValue from './hooks/useAnimationValue'
import animatedLoop from './loop'
import AnimatedCubicBezier from './models/CubicBezier'
import AnimatedEase from './models/Ease'
import AnimatedEaseIn from './models/EaseIn'
import AnimatedEaseInOut from './models/EaseInOut'
import AnimatedEaseOut from './models/EaseOut'
import AnimatedLinear from './models/Linear'
import AnimatedValue from './models/Value'
import animatedParallel from './parallel'
import animatedSequence from './sequence'
import animatedTiming from './timing'
namespace Animated {
  export import Value = AnimatedValue
  export import timing = animatedTiming
  export import parallel = animatedParallel
  export import sequence = animatedSequence
  // export import loop = animatedLoop
  export const Animation = AnimatedAnimation
  export const useAnimationValue = animatedUseAnimationValue
  export namespace Easing {
    export const ease = ( type: Models.Ease.Types = 'in-out', subtype: Models.Ease.SubTypes = 'sine' ) =>
      ( value: Value, duration: number, to: number ) =>
        new Models.Ease( value, to, duration, type, subtype )

    export const easeIn = ( type: Models.EaseIn.Types = 'sine' ) =>
      ( value: Value, duration: number, to: number ) =>
        new Models.EaseIn( value, to, duration, type )

    export const easeOut = ( type: Models.EaseOut.Types = 'sine' ) =>
      ( value: Value, duration: number, to: number ) =>
        new Models.EaseOut( value, to, duration, type )

    export const easeInOut = ( type: Models.EaseInOut.Types = 'sine' ) =>
      ( value: Value, duration: number, to: number ) =>
        new Models.EaseInOut( value, to, duration, type )

    export const linear = () =>
      ( value: Value, duration: number, to: number ) =>
        new Models.Linear( value, to, duration )

    export const bezier = ( metrics: Models.CubicBezier.Bezier ) =>
      ( value: Value, duration: number, to: number ) =>
        new Models.CubicBezier( metrics, value, to, duration )
  }
  export namespace Models {
    export import CubicBezier = AnimatedCubicBezier
    export import Ease = AnimatedEase
    export import EaseIn = AnimatedEaseIn
    export import EaseOut = AnimatedEaseOut
    export import EaseInOut = AnimatedEaseInOut
    export import Linear = AnimatedLinear
  }
}

export = Animated
