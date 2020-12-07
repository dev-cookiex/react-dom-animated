import IAnimation from '../interfaces/IAnimation'
import requestAnimationFrame from '../tools/requestAnimationFrame'
import Value from './Value'

abstract class Animation implements IAnimation {
  private _start: number | null = null
  private _stop = false
  private _end: () => void | null = null

  private _handler = () => {
    const now = Date.now()
    if ( !this._start ) this._start = now
    const time = Math.min( now - this._start, this.duration )
    const percent = this.algorithm( time, now )
    const value = this.value.value()
    const offset = ( this.to - value ) * percent
    this.value.offset( offset )
    if ( time < this.duration && !this._stop ) requestAnimationFrame( this._handler )
    else {
      this.value.merge()
      this._end?.()
      delete this._end
    }
  }

  private _initial: number

  constructor( private value: Value, private to: number, protected duration: number ) {
    this._initial = value.get()
  }

  protected abstract algorithm( time: number, current: number ): number

  public inverse = ( callback?: () => void ) => {
    const originalTo = this.to
    this.to = this._initial
    this._end = () => {
      this.to = originalTo
      callback?.()
    }
    requestAnimationFrame( this._handler )
    return this
  }

  public start = ( callback?: () => void ) => {
    requestAnimationFrame( this._handler )
    this._end = callback
    return this
  }

  public stop = () => {
    this._stop = true
    return this
  }
}

export default Animation
