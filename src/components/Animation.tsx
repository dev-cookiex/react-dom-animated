import forwardComponent from '@cookiex-react/forward-component'

import React, { useEffect, useMemo } from 'react'

import AnimationListener from '../models/AnimationListener'

const Animation = forwardComponent.withRef( (
  { style: propStyle = {}, ...props }: Animation.Props,
  Component,
  ref
) => {
  const style: React.CSSProperties = useMemo( () => {
    return Object.fromEntries(
      Object.entries( propStyle )
        .map( ( [ key, value ] ) => {
          if ( isAnimationListener( value ) ) return [ key, value.get() ]
          else return [ key, value ]
        } )
    )
  }, [ propStyle ] )

  useEffect( () => {
    const unlisteners = Object.entries( propStyle )
      .filter( isEntryAnimationListener )
      .map( ( [ key, value ] ) => {
        if ( keysToReiceveNumberAndConvertPx.includes( key ) )
          return value.on( value => {
            if ( ref.current ) ref.current.style[key] = typeof value === 'number' ? `${value}px` : value
          } )
        else return value.on( value => {
          if ( ref.current ) ref.current.style[key] = value
        } )
      } )

    return () => unlisteners.forEach( unlitener => unlitener() )
  }, [ propStyle, ref ] )

  return <Component {...props} style={style}/>
} )

namespace Animation {
  export interface Props {
    style: {
      [K in keyof React.CSSProperties]?:
        | React.CSSProperties[K]
        | AnimationListener<string | number | React.CSSProperties[K]>
    }
  }
}

const keysToReiceveNumberAndConvertPx = [
  'width',
  'height',

  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',

  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight'
]

const isAnimationListener = ( v: any ): v is AnimationListener<any> =>
  typeof v === 'object' && v instanceof AnimationListener

const isEntryAnimationListener = ( entry: [ string, any ] ): entry is [ string, AnimationListener<any> ] =>
  isAnimationListener( entry[1] )

export default Animation
