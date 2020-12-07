import IAnimation from './interfaces/IAnimation'

const parallel = ( ...animations: IAnimation[] ) => {
  return {
    start: ( callback?: () => void ) => {
      let count = 0
      animations.forEach( animation => {
        animation.start( () => {
          if ( ++count >= animations.length ) callback?.()
        } )
      } )
    },
    stop: () => {
      animations.forEach( aniamtion => aniamtion.stop() )
    }
  }
}

namespace parallel {}

export = parallel
