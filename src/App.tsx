import { Routes, Route } from "react-router-dom";
import CardPage from "./page/CardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/card/:company" element={<CardPage/>}/>
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )
}
