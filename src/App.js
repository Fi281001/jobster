import {Langding, Error, Register, Dashboard} from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  console.log("Rendering App component");
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='langding' element={<Langding />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <ToastContainer position='top-center' />
  </BrowserRouter>
    
  );
}

export default App;
