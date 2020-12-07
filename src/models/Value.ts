import AnimationListener from './AnimationListener'
import Interpolation from './Interpolation'
import Mapper from './Mapper'

/* eslint-disable prefer-arrow/prefer-arrow-functions */
class Value extends AnimationListener<number> {
  private _value: number
  private _offset: number = 0

  constructor( initial: number ) {
    super()
    this._value = initial
  }

  public set = ( value: number ) => {
    this._value = value
    this._call( this.get() )
    return this
  }

  public get = () => this._value + this._offset

  public value = () => this._value

  public offset(): number
  public offset( to: number ): this
  public offset( to?: number ) {
    if ( to === undefined ) return this._offset
    this._offset = to
    this._call( this.get() )
    return this
  }

  public interpolation = <O extends string | number>( configuration: Interpolation.Configuration<number, O> ) =>
    new Interpolation<number, O>( this, configuration )

  public map = <O>( map: Mapper.Map<number, O> ) => new Mapper<number, O>( this, map )

  public merge = () => {
    this._value += this._offset
    this._offset = 0
  }
}

namespace Value {}

export = Value
