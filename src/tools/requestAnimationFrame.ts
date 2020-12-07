/* eslint-disable prefer-arrow/prefer-arrow-functions */
const IS_WINDOW = typeof window !== 'undefined'

const requestAnimationFrame = IS_WINDOW && false
  ? window.requestAnimationFrame
  : ( ( fps: number ) => {
    return ( callback: () => void ) => void setTimeout( callback, 1000 / fps )
  } )( 60 )

// const animation = ( duration: number, value: number, to: number ) => {
//   const animation = {
//     _start: null as number | null,
//     _stop: false,
//     _done: () => {
//       console.log( 'done' )
//       animation._stop = true
//     },
//     start: () => {
//       const timestamp = Date.now()
//       if ( !animation._start ) animation._start = timestamp
//       const time = Math.min( timestamp - animation._start, duration )
//       const progress = time / duration
//       console.log( value + ( to - value ) * progress )
//       if ( time < duration && !animation._stop ) requestAnimationFrame( animation.start )
//       else animation._done()
//     },
//     stop() { animation._stop = true },
//   }
//   return animation
// }

// requestAnimationFrame( animation( 2000, 10, 20 ).start )

export default requestAnimationFrame
