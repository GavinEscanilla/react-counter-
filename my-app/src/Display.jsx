import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/reset";


 const Display = () => {
  const [count, setCount] = useState(0);
   return(
     <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
     <Increment  count={count} setCount={setCount} />
      <div>{count}</div>
      <Decrement  count={count} setCount={setCount} />
      <Reset setCount={setCount} />
     </div>
   )
 };
 
 export default Display;