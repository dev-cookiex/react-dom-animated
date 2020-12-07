import IAnimation from './interfaces/IAnimation'

const sequence = ( ...animations: IAnimation[] ) => {
  let stop = false
  let current: IAnimation
  return {
    start: ( callback?: () => void ) => {
      const recursiveSequence = ( index: number ) => {
        if ( !animations[index] ) callback?.()
        else if ( !stop ) ( current = animations[index] ).start( recursiveSequence.bind( null, index + 1 ) )
      }
      recursiveSequence( 0 )
    },
    stop: () => {
      stop = true
      current?.stop()
    }
  }
}

namespace sequence {}

export default sequence
