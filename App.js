import React from 'react';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/create' element={<Add />} />
            <Route path ='/edit' element={<Edit />} />


        </Routes>
      </Router>
    </div>
  )
}

export default App
