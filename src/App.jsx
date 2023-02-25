import { useEffect, useLayoutEffect, useState } from "react"
function App() {
  const [greeting, setGreeting] = useState("Hi")

  useEffect(() => {
    setGreeting("This is the home page")
    console.log(greeting)
  }, [])

  useLayoutEffect(() => {
    setGreeting("Hello, Mr Babatunde")
    console.log(greeting)
  }, [])

  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <h1 className="text-black font-thin text-2xl underline underline-offset-8 hover:text-blue-500 hover:cursor-pointer">{greeting}</h1>
    </div>
  )
}

export default App
