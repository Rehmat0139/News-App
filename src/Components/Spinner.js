import React, { Component } from 'react'
import './style.css';
import loader from './loader.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='spinner text-center back'>
        <img className='m-5' src={loader} alt={loader} />
      </div>
    )
  }
}

export default spinner