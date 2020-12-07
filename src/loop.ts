/* eslint-disable consistent-return */

import Animation from './models/Animation'

const loop = (
  animation: Animation, {
    interations: maxInterations = Infinity
  }: loop.Configuration = {}
) => {
  let finished = false
  let interations = 0

  return {
    start: ( callback?: () => void ) => {
      let inverse = false
      const restart = () => {
        console.log( 'restart' )
        if ( finished || interations >= maxInterations ) return callback?.()
        interations++
        if ( inverse ) animation.inverse( restart )
        else animation.start( restart )
        inverse = !inverse
      }
      console.log( 'start' )
      restart()
    },
    stop: () => {
      finished = true
      animation.stop()
    }
  }
}

namespace loop {
  export interface Configuration {
    interations?: number
  }
}

export = loop
