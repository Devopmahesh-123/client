import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import DefaultLayout from './layout/defaultLayout';
import Dashboard from './component/Dashboard';
import { ToastContainer } from 'react-toastify';
import AddEditForm from './component/addEditForm';

function App() {
  const state = true;
  return (
    <Router>
    <Routes>
         <Route path='/dashboard' element={<DefaultLayout/>}>
             <Route index element={<Dashboard/>}/>
             <Route path='addtodo' element={<AddEditForm/>}/>
         </Route>
         <Route path='/' element={ state ? <Navigate to='/dashboard'/>:null} />
    </Routes>
    <ToastContainer autoClose={5000} limit={1} />
   </Router>
  );
}

export default App;
