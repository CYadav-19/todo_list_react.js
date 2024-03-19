import React from 'react';
// import Restaurant from "./component/Basics/Restaurant";
// import UseState  from  "./component/Hooks/useState";
// import UseEffect  from  "./component/Hooks/useEffect";
// // import useReducer  from  "./component/Hooks/useReducer";

import Todo from "./component/todo/todo";


// agar kalko html jaisa likh sakh sakte hai 
const App = () => {
  return (
    <>
      <Todo />
    </>
  );
  //<> below is    this is react fragmentic shortcut just like the const / form 

  // <> 
  //   <h1 className="myclassname">Hello  </h1>
  //   <MyName/>

  //   <p>Awesome</p>
  //   <img src="" alt=""/>
  // </>
  // //above wale ko JSX bolte , html jaise likhte waise 
  // //it alwys return single element
  // 
};
// //how react actualyy works
// const App=() =>{
//   return React.createElement("h1",{},"Hello World!")
// }
export default App;