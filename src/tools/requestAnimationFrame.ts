/* eslint-disable prefer-arrow/prefer-arrow-functions */
const IS_WINDOW = typeof window !== 'undefined'

const requestAnimationFrame = IS_WINDOW
  ? window.requestAnimationFrame.bind( window )
  : ( ( fps: number ) => {
    return ( callback: () => void ) => void setTimeout( callback, 1000 / fps )
  } )( 60 )

export default requestAnimationFrame
