import React from 'react'
import './SignalStrength.scss'

export function Poor() {
  return (
    <>
      <div className='signal-bars mt1 sizing-box poor one-bar'>
        <div className='first-bar bar'></div>
        <div className='second-bar bar'></div>
        <div className='third-bar bar'></div>
        <div className='fourth-bar bar'></div>
        <div className='fifth-bar bar'></div>
      </div>
    </>
  )
}

export function Good() {
  return (
    <>
      <div className='signal-bars mt1 sizing-box good two-bars'>
        <div className='first-bar bar'></div>
        <div className='second-bar bar'></div>
        <div className='third-bar bar'></div>
        <div className='fourth-bar bar'></div>
        <div className='fifth-bar bar'></div>
      </div>
    </>
  )
}

export function Better() {
  return (
    <>
      <div className='signal-bars mt1 sizing-box better three-bars'>
        <div className='first-bar bar'></div>
        <div className='second-bar bar'></div>
        <div className='third-bar bar'></div>
        <div className='fourth-bar bar'></div>
        <div className='fifth-bar bar'></div>
      </div>
    </>
  )
}

export function Best() {
  return (
    <>
      <div className='signal-bars mt1 sizing-box best four-bars'>
        <div className='first-bar bar'></div>
        <div className='second-bar bar'></div>
        <div className='third-bar bar'></div>
        <div className='fourth-bar bar'></div>
        <div className='fifth-bar bar'></div>
      </div>
    </>
  )
}

export function Excellent() {
  return (
    <>
      <div className='signal-bars mt1 sizing-box excellent five-bar'>
        <div className='first-bar bar'></div>
        <div className='second-bar bar'></div>
        <div className='third-bar bar'></div>
        <div className='fourth-bar bar'></div>
        <div className='fifth-bar bar'></div>
      </div>
    </>
  )
}
