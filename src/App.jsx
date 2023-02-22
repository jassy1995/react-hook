import { useState, useEffect } from "react"
import Button from "./components/Button";

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

  }, [resourceType])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > scrollPosition) {
      setScrollDirection('down');
    } else if (currentPosition < scrollPosition) {
      setScrollDirection('up');
    } else {
      setScrollDirection('none');
    }
    setScrollPosition(currentPosition);
  }



  return (
    <div className="h-screen  flex flex-col justify-center items-center space-y-4 mx-auto py-4">
      <div className="flex space-x-8">
        <p className="text-black">window width: {windowWidth}</p>
        <p className="text-black">Scroll position: {scrollPosition}</p>
        <p className="text-black">Scroll direction: {scrollDirection}</p>
      </div>
      <div className="w-[100%] h-[80%] border border-slate-300 p-4">
        <div className="flex justify-between">
          <Button handler={() => setResourceType("posts")}>Posts</Button>
          <Button handler={() => setResourceType("users")}>Users</Button>
          <Button handler={() => setResourceType("comments")}>Comments</Button>
        </div>
        <h1 className="text-black text-2xl">{resourceType} {items.length}</h1>
        <div className="text-black">
          {items?.map((item, index) => (
            <pre className="text-black" key={index}>{JSON.stringify(item)}</pre>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
