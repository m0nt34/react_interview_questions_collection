import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectableGrid from "./collection/selectable grid/SelectableGrid";
import GridLights from "./collection/grid lights/GridLights";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selectable-grid" element={<SelectableGrid />} />
        <Route path="/grid-lights" element={<GridLights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
