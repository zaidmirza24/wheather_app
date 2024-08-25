import { useState } from "react"
import Wheather from "./component/Wheather"

function App() {
  const [first, setfirst] = useState(0)

  return (
    <> 
    <div className=" h-screen flex justify-center items-center ">
    <div className="">
      <Wheather/>
    </div>
    </div>
    </>
  )
}
 
export default App
