import AnimationListener from './AnimationListener'

class Mapper<I, O> extends AnimationListener<O> {
  constructor( private node: AnimationListener<I>, private map: Mapper.Map<I, O> ) {
    super()
    node.on( receive => this._call( map( receive ) ) )
  }

  public get = () => this.map( this.node.get() )
}

namespace Mapper {
  export type Map<I, O> = ( receive: I ) => O
}

export = Mapper
