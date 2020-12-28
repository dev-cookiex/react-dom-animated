import add from '../calc/add'
import divide from '../calc/divide'
import multiply from '../calc/multiply'
import subtract from '../calc/subtract'
import AnimationListener from './AnimationListener'
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

  public divide( by: number | AnimationListener<number> ) { return divide( this, by ) }
  public multiply( by: number | AnimationListener<number> ) { return multiply( this, by ) }
  public subtract( by: number | AnimationListener<number> ) { return subtract( this, by ) }
  public add( by: number | AnimationListener<number> ) { return add( this, by ) }

  public map = <O>( map: Mapper.Map<number, O> ) => new Mapper<number, O>( this, map )

  public merge = () => {
    this._value += this._offset
    this._offset = 0
  }
}

namespace Value {}

export = Value
