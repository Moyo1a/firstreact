import React, { Component } from 'react'

class UserGreeting extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      isLoggedIn: true
   }
 }
 
 
    render() {
      return this.state.isLoggedIn && <div>Welcome maryam</div>
      //   this.state.isLoggedIn ?
      //   <div>Welcome Mariam</div> :
      //   <div>Welcome Ayo</div>

      // )
      // first method
      // if(this.state.isLoggedIn) {
      //   return (
      //     <div>
      //       Welcome Mariam
      //     </div>
      //   )
      // } else{
      //   return ( <div>
      //     Welcome Moyo 
      //   </div>
      //   )
      // }

//       let message
//       if(this.state.isLoggedIn) {
//         message= <div>ah clap for him</div>
//       }else {
//        message= <div>Ah clap for her</div>
//       }
// return <div>{message}</div>


  }
}

export default UserGreeting;