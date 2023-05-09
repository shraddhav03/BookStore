import { Routes, Route } from "react-router-dom";

import "./styles.css";
import { Header } from "./components/Header";
import { Favourites } from "./pages/Favourites";
import { Read } from "./pages/Read";
import { Profile } from "./pages/Profile";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
