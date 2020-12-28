import AnimationListener from './AnimationListener'
import Interpolation from './Interpolation'

class BaseCalc extends AnimationListener<number> {
  constructor(
    calc: ( a: number, b: number ) => number,
    a: number | AnimationListener<number>,
    b: number | AnimationListener<number>
  ) {
    super()
    if ( typeof a !== 'number' )
      if ( typeof b !== 'number' ) {
        a.on( value => this._call( calc( value, b.get() ) ) )
        b.on( value => this._call( calc( a.get(), value ) ) )
        this._last = calc( a.get(), b.get() )
      }

      else {
        a.on( value => this._call( calc( value, b ) ) )
        this._last = calc( a.get(), b )
      }

    else if ( typeof b !== 'number' ) {
      b.on( value => this._call( calc( a, value ) ) )
      this._last = calc( a, b.get() )
    }

    else this._last = calc( a, b )
  }

  public get = () => this._last
  public interpolation = <O extends string | number>( configuration: Interpolation.Configuration<number, O> ) =>
    new Interpolation<number, O>( this, configuration )
}

export default BaseCalc
