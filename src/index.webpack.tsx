import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Animated from './index'

const root = document.getElementById( 'root' )

const body = document.querySelector( 'body' )

body.style.margin = 'unset'
body.style.width = root.style.width = '100vw'
body.style.height = root.style.height = '100vh'
body.style.display = 'flex'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'

const App = () => {
  const percent = React.useRef( new Animated.Value( 0 ) ).current
  const [ open, setOpen ] = useState( false )

  React.useEffect( () => {
    const animation = Animated.timing( percent, 1000, open ? 100 : 0, {
      easing: Animated.Easing.ease()
    } )
    animation.start()
    return animation.stop
  }, [ percent, open ] )

  React.useEffect( () => {
    window.addEventListener( 'click', () => {
      setOpen( open => !open )
    } )
  }, [] )

  return (
    <Animated.Animation as='section' style={ {
      width: percent.interpolation( { input: [ 0, 100 ], output: [ 0, 200 ] } ),
      height: '100%',
      backgroundColor: 'royalblue',
      overflow: 'hidden'
    } }>
      <ul style={ { margin: 0 } }>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
      </ul>
    </Animated.Animation>
  )
}

ReactDOM.render( <App />, root )
