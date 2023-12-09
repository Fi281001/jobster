import {Langding, Error, Register, ProtectedRoute} from "./pages";
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,

} from './pages/dashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
          }
        >
        <Route index element={<Stats />} />
        <Route path='all-jobs' element={<AllJobs />} />
        <Route path='add-job' element={<AddJob />} />
        <Route path='profile' element={<Profile />} />
        
      </Route>
      <Route path='register' element={<Register />} />
      <Route path='landing' element={<Langding />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <ToastContainer position='top-center' />
  </BrowserRouter> 
  );
}

export default App;
