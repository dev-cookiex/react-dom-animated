import Animation from './Animation'

class Linear extends Animation {
  protected algorithm = ( time: number ) => time / this.duration
}

namespace Linear {}

export = Linear
