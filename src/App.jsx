import FunctionalContext from "./components/FunctionalContext";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <ThemeProvider>
        <div className="flex space-x-6">
          <FunctionalContext />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
