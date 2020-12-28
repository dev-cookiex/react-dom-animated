/* eslint-disable consistent-return */
import AnimationListener from './AnimationListener'

const defaultRule = /^(?<prefix>[^\d.]{0,})?(?<number>[0-9]*\.?[0-9]{1,})(?<posfix>[^\d.]{0,})?$/

class Interpolation<I, O extends number | string> extends AnimationListener<O> {
  private input: Interpolation.Input<I>
  private output: Interpolation.Output<O>
  constructor( private node: AnimationListener<I>, private configuration: Interpolation.Configuration<I, O> ) {
    super()
    this.assert()
    node.on( value => {
      if ( !this.checkInputType( value ) ) throw new Error( '' )
      const { groups: { number: stringNumber } } = defaultRule.exec( value.toString() )
      const number = parseInt( stringNumber )
      const percent = Math.min( number / ( this.input[1] - this.input[0] ) )
      const result = number < this.output[0]
        ? this.output[0]
        : this.output[1] * percent

      if ( this.output.type === 'string' )
        this._call( `${this.output.prefix}${result}${this.output.posfix}` as O )
      else this._call( result as O )
    } )
  }

  public get = () => {
    const value = this.node.get()
    if ( !this.checkInputType( value ) ) throw new Error( '' )
    const { groups: { number: stringNumber } } = defaultRule.exec( value.toString() )
    const number = parseInt( stringNumber )
    const percent = Math.min( number / ( this.input[1] - this.input[0] ) )
    const result = number < this.output[0]
      ? this.output[0]
      : this.output[1] * percent

    if ( this.output.type === 'string' )
      return `${this.output.prefix}${result}${this.output.posfix}`
    else return result
  }

  private assert = () => {
    if ( !this.checkInput() ) throw new Error( 'wrong input please check documentation' )
    if ( !this.checkOutput() ) throw new Error( 'wrong ouput please check documentation' )
  }

  private _chekedInputType = false
  private checkInputType = ( value: I ) => {
    if ( this._chekedInputType ) return true
    const [ input1, input2 ] = this.configuration.input
    if ( typeof input1 !== typeof value ) return false
    if ( typeof input2 !== typeof value ) return false
    return this._chekedInputType = true
  }

  private checkInput = () => {
    const [ input1, input2 ] = this.configuration.input
    const { groups: { prefix = '', number, posfix = '' } } = defaultRule.exec( input1.toString() )
    const rule = RegExp( `^${prefix}(?<number>[0-9]*\\.?[0-9]{1,})${posfix}$` )
    if ( !rule.test( input2.toString() ) ) return false
    const numbers: [ number, number ] =
      [ parseFloat( number ), parseFloat( rule.exec( input2.toString() ).groups.number ) ]
    this.input = Object.assign( numbers, { prefix, posfix, original: this.configuration.input } )
    return true
  }

  private checkOutput = () => {
    const [ output1, output2 ] = this.configuration.output
    const { groups: { prefix = '', number, posfix = '' } } = defaultRule.exec( output1.toString() )
    const rule = RegExp( `^${prefix}(?<number>[0-9]*\\.?[0-9]{1,})${posfix}$` )

    if ( !rule.test( output2.toString() ) ) return false
    const numbers: [ number, number ] =
      [ parseFloat( number ), parseFloat( rule.exec( output2.toString() ).groups.number ) ]

    const r = { prefix, posfix, original: this.configuration.output, type: typeof output1 as 'string' | 'number' }
    this.output = Object.assign( numbers, r )
    return true
  }

  public interpolation = <O2 extends string | number>( configuration: Interpolation.Configuration<O, O2> ) =>
    new Interpolation<O, O2>( this, configuration )
}

namespace Interpolation {
  export interface Configuration<I, O> {
    input: [ I, I ]
    output: [ O, O ]
  }
  export type Input<I> = [ number, number ] & { prefix: string, posfix: string, original: [ I, I ] }
  export type Output<O> = [ number, number ] & {
    prefix: string,
    posfix: string,
    original: [ O, O ],
    type: 'string' | 'number'
  }
}

export = Interpolation
