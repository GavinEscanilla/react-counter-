import { useState } from "react";
import Increment from "./components/Increment";

 const Display = () => {
  const [count, setCount] = useState(0);
   return(
     <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
     <Increment setcount={setCount()} />
      <div>{count}</div>
     </div>
   )
 };
 
 export default Display;