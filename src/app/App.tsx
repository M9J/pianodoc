import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Chords from "./pages/chords/Chords";
import Home from "./pages/Home";
import Keys from "./pages/keys/Keys";
import Models from "./pages/models/Models";
import Modules from "./pages/modules/Modules";
import PageNotFound from "./pages/PageNotFound";
import Scales from "./pages/scales/Scales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index path="/" element={<Modules />} />
          <Route path="keys" element={<Keys />} />
          <Route path="scales" element={<Scales />} />
          <Route path="chords" element={<Chords />} />
          <Route path="models" element={<Models />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
