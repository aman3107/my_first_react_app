import {useState,useEffect} from 'react';
import "./App.css";

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: John</h1>
//     <h2>Last Name: Doe</h2>
//     <h2>Age: 30</h2>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   );
// };

const App = () => {  
  const [counter,setCounter] = useState(0);
  // const name = "Aman Mittal";
  // const isNameShowing = false;
  useEffect(() => {
    // 
    // setCounter(100);
    alert("You've changed the counter to " + counter)
  },[counter])
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount)=>prevCount + 1)}>+</button>
      {/* <Person name={"Aman"} lastName={"Mittal"} age={23} />
      <Person name={"Payal"} lastName={"Mittal"} age={30} /> */}
      {/* <h1>Hello {name}</h1> */}
      {/* <h1>Hello {isNameShowing ? name: "someone"}</h1> */}
      {/* <h1>Hello {2 + 2}</h1>
      {name ? (
        <>
        <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>Test</h1>
          <h2>There is no name</h2>
        </>
      )} */}
    </div>
  );
};

export default App;
