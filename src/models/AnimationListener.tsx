abstract class AnimationListener<T> {
  private listeners: ( ( current: T ) => void )[] = []
  protected _last: T

  protected _call = ( value: T ) => {
    this._last = value
    this.listeners.forEach( listener => listener( value ) )
    return this
  }

  public on = ( listener: ( current: T ) => void ) => {
    this.listeners.push( listener )
    return () => this.off( listener )
  }

  public off = ( listener?: ( current: T ) => void ) => {
    if ( listener === undefined ) this.listeners = []
    else this.listeners.splice( this.listeners.indexOf( listener ), 1 )
    return this
  }

  public abstract get(): any
}

namespace AnimationListener {}

export = AnimationListener
