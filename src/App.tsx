import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/page"
import EditorPage from "./pages/editor/page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/editor' element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
