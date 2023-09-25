import './App.css';
import { Route } from "react-router-dom";
import Home from './Views/Home/Home';
import Form from './Views/Form/Form';
import LandingPage from './Views/Landing/Landing';
import NavBar from './Components/Navbar/Navbar';
import Pagination from './Components/Pagination/Pagination';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities, getCountries } from './Redux/Actions/actions'

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  let currentCountries;
  let totalPages = Math.ceil(data.countries.length / 10) + 1;

  useEffect(() => {
    if(!data.countriesBackUp.length) {
      dispatch(getCountries());
    }
    if(!data.activities.length) {
      dispatch(getActivities());
    }
  },[]);

  if(currentPage === 1) {
    currentCountries = data.countries.slice(
      (currentPage - 1) * 10 - 1, //slice desde 9, a 19, la primera vez que entra a esta condicion current page vale 2, por eso el -1
      (currentPage - 1) * 10 + 9
    )
  }

  if(data.countries.length < data.countriesBackUp.length) {
    totalPages = Math.ceil(data.countries.length / 10); // Math.ceil se usa para redondear un num hacia arriba. 4.2 = 5 
  }

  const paginate = (number) => {
    setCurrentPage(currentPage + number);
  };


  return (
    <div className='App'>
      <Route exact path={'/'} component={LandingPage} />
      <Route path={'/home'} >
        <NavBar data={data} setCurrentPage={setCurrentPage} />
        <Home data={currentCountries} />
        <Pagination 
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Route>
      <Route path={'/form'}>
        <Form data={data} />
      </Route>
    </div>
  );
}


export default App;
