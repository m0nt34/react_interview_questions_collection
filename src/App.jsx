import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectableGrid from "./collection/selectable grid/SelectableGrid";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selectable-grid" element={<SelectableGrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
