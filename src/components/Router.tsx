import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../page/Home';
import Challenge from '../page/Challenge';
import Result from '../page/Result';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/challenge' element={<Challenge />} />
        <Route path='/result/:id' element={<Result />} />
        <Route path='*' element={<Navigate to={'/'}/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter;