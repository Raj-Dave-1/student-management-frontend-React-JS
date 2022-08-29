// 🚩 Dada Ki Jay Ho 🚩

import "./App.css";
import MyFooter from "./components/MyFooter";
import NavigationBar from "./components/NavigationBar";
import Student from "./components/Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewStudents from "./components/ViewStudents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/addStudent" element={<Student />} />
          <Route path="/viewStudents" element={<ViewStudents />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
