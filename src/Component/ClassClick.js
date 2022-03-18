import React, { Component } from 'react'

export class ClassClick extends Component {
ClickHandler () {
    console.log('clicked the button')
}

  render() {
    return (
      <div><button onClick={this.ClickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick