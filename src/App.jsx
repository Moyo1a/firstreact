
import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import  Message from './Component/Message'
import Counter from './Component/Counter'
import FunctionClick  from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import StyleSheet from './Component/Stylesheet'
import Inline from './Inline';
// import Person from './Component/Person';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Component/Form';
import LifecycleA from './Component/LifecycyleA';
import FragmentDemo from './Component/FragmentDemo';
import Table from './Component/Table';
// import LifecycleB from './Component/LifecycleB';




class App extends Component {
    render() {
  return (
    <div className='App'>
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

{/* // <Greet name="maryam" heroName="Superlady">
//   <p>This is the children tag</p>
// </Greet>
// <Greet name="moyosore" heroName="Batwoman">
// <button>Click me</button>
// </Greet>


// <Welcome name="maryam" heroName="Atlas" />
// <Welcome name="greeet"heroName="mAYTKAT" /> */}
{/* <ClassClick />
<FunctionClick /> */}
{/* <UserGreeting /> */}
{/* <StyleSheet primary= {true}/> */}
{/* <Inline /> */}
{/* <Person /> */}
{/* < Form /> */}
{/* <LifecycleA /> */}
<Table />
   </div>
  
  );
}
}
export default App;