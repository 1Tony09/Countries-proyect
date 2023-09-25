import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './Navbar.module.css'
import { filterCountriesByActivity, filterCountriesByContinent, getCountryByName, orderCountries, cleaner, cleanError, } from '../../Redux/Actions/actions'
import { IoClose, IoMenuSharp } from "react-icons/io5";


export default function NavBar({ data, setCurrentPage }) {
    const [navbar, setNavbar] = useState(false);
    const countriesBackUp = data.countriesBackUp;
    const continents = [
        ...new Set(countriesBackUp.map((c) => c.continent)),
    ];
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [order, setOrder] = useState('');
    const [filter, setFilter] = useState('');

    const handleChange = (e) => {
        e.preventDefault();

        if(data.error) {
            dispatch(cleanError());
        }
        setName(e.target.value);
    }

    const handleOrder = (e) => {
        e.preventDefault();
        setOrder(e.target.value);
        dispatch(orderCountries(e.target.value));
        setCurrentPage(1);
        setOrder('');
    }

    const handleFilterContinent = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
        dispatch(filterCountriesByContinent(e.target.value));
        setCurrentPage(1);
        setFilter('');
    }

    const handleFilterActivity = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
        dispatch(filterCountriesByActivity(e.target.value));
        setCurrentPage(1);
        setFilter('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountryByName(name));
        setCurrentPage(1);
        setName('');
    }

    return (
        <React.Fragment>
            <nav className={style.nav}>
                <div className={style.navCont}>
                    <div className={style.navContNav}>
                        <button className={style.button} onClick={() => setNavbar(!navbar)}> {navbar ? <IoClose size={30}/> : <IoMenuSharp size={30} />} </button>
                        <form onSubmit={handleSubmit} className={style.form}>
                            <input 
                                type='text'
                                placeholder='Search by name...'
                                value={name}
                                onChange={handleChange}
                                className={style.inputName}
                            />
                            <button type='submit'>
                                <span className={style.span}> travel_explore </span>
                            </button>
                        </form>
                    </div>

                    <div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type='text'
                                    placeholder='Search countries by name...'
                                    value={name}
                                    onChange={handleChange}
                                />
                                <button type='submit'>
                                    <span>
                                        travel_explore
                                    </span>
                                </button>
                            </form>

                            <select
                                name='filterByContinent'
                                id='filterByContinent'
                                value={filter}
                                onChange={handleFilterContinent}
                                className={style.filterContinent}
                            >
                                <option> Filter by continent </option>
                                {continents.map((c) => {
                                    return (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    )
                                })}
                            </select>

                            <select>
                                <option> Filter by activity </option>
                                {data.activities.length ? (
                                    data.activities.map((a) => {
                                        return (
                                            <option key={a.id} value={a.name}>
                                                {a.name}
                                            </option>
                                        )
                                    })
                                ) : (
                                    <option>No activities created</option>
                                )}
                            </select>

                            <select
                                name='order'
                                id='order'
                                value={order}
                                onChange={handleOrder}
                            >
                                <option> Order alphabetically </option>
                                <option value={orderAtoZ}>Order from A to Z</option>
                                <option value={orderZtoA}>Order from Z to A</option>
                                <option> Order population </option>
                                <option value='ascending'>Highest to lowest</option>
                                <option value='descending'>Lowest to highest</option>
                            </select>

                            <button onClick={() => {
                                dispatch(cleaner());
                            }}>
                                All countries
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}