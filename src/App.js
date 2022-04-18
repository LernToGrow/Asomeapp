// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





// import React, { createContext } from "react";
// import ConA from './contextapi/ConA'

// const FirstName = createContext();
// const LastName = createContext();
// const App=()=>{
//   return(
//     <> 
//         <FirstName.Provider value={"sumit"}>
//             <LastName.Provider value={"kamble"}>
//               <ConA/>
//             </LastName.Provider>
//         </FirstName.Provider>
//     </>
//   )};
// export default App;
// export {FirstName,LastName};


// import React, { useEffect, useState } from "react";

// const App = () =>{
//   const [num, setNum] = useState(0);
//   const [nums, setNums] = useState(0);
//   useEffect(()=>{
//     alert("i am cliked")
//   },[num])
//   return(
//   <>
//       <button onClick={()=>{
//         setNum(num+1);
//       }}>
//         click me {num}
//       </button>
//       <br/>
//       <button onClick={()=>{
//         setNums(nums+1);
//       }}>
//         click me {nums}
//       </button>
//   </>

// )}
// export default App;




// import React from "react";
// import Titleincrement from "./increment/Titleincrement";

// const App = ()=>{
// return (
//   <>
//     <Titleincrement/>
//   </>
// )
// }
// export default App;



// import React from "react";
// import Home from "./Reactrouter/Home";
// import About from "./Reactrouter/About";
// import Error from "./Reactrouter/Error";
// import { Routes ,Route } from 'react-router-dom';

// const App = ()=>{
//   const Name=()=>{
//     return (
//       <>
//         <h1>this is a name page</h1>
//       </>
//     )
//   };
// return (
//   <>
//       <Routes>
//         <Route exact path="/About" element={<About/>}></Route>
//         <Route path="/About/Name" element={<Name/>}></Route>
//         <Route exact path="/Home" element={<Home/>}></Route>
//         <Route path="*" element={<Error/>}/>
//       </Routes>
//   </>
// )
// }
// export default App;



import React from "react";
import Home from "./Reactrouter/Home";
import About from "./Reactrouter/About";
import Error from "./Reactrouter/Error";
import { Routes ,Route ,Navigate} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import User from './useparams/User';
import './index.css'
import Search from "./search/Search";

const App = ()=>{
  const Name=()=>{
    return (
      <>
        <h1>this is a name page</h1>
      </>
    )
  };
return (
  <>
      <Navbar/>
      <Routes>
        <Route exact path="/About" element={<About/>}></Route>
        <Route path="/About/Name" element={<Name/>}></Route>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route path="/user/:name/:surname" element={<User/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="*" element={<Error/>}/>
        {/* 

          
        <Navigate/> */}
      </Routes>
  </>
)
}
export default App;




