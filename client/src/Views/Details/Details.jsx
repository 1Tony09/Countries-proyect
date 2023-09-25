import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getCountryById } from '../../Redux/Actions/actions'
import { NavLink } from 'react-router-dom'
import { IoClose } from "react-icons/io5"
import style from './Details.module.css'

export default function Details({ handleClose, id }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    let countryDetail = data.countryDetail;

    useEffect(() => {
        dispatch(getCountryById(id));
    }, []);

    return (
        <React.Fragment>
            <div className={style.container}>
                <div className={style.modal}>
                    <div className={style.background} aria-hidden="true">
                        <div className={style.overlay}></div>
                    </div>

                    <span className={style.spanStyle} aria-hidden="true">
                        &#8203; // Es un espacio en blanco ancho
                    </span>

                    <div className={style.content}>
                        <div className={style.header}>
                            <button className={style.closeButton} onClick={handleClose}>
                                <IoClose size={30} />
                            </button>
                            <h2 className={style.countryName}>
                                {countryDetail.name}
                            </h2>
                        </div>
                        
                        <div className={style.details}>
                            <div className={style.imageContainer}>
                                <div className={style.flagImage}>
                                    <img src={countryDetail.flag} alt={`Flag of ${countryDetail.name}`} className={style.flagImage}/>
                                </div>

                                <div className={style.info}>
                                    <p>{countryDetail.id}</p>
                                    <p>{countryDetail.continent}</p>
                                    <p>{countryDetail.capital}</p>
                                    <p>{countryDetail.subregion}</p>
                                    <p>{countryDetail.area}</p>
                                    <p>{countryDetail.population}</p>
                                </div>
                            </div>

                            <div className={style.activitiesHeader}>
                                <h3 className={style.activitiesTitle}>
                                    Tourist activity:
                                </h3>
                                <div className={style.activitiesList}>
                                    {countryDetail.activities?.length ? (
                                        countryDetail.activities.map((e) => {
                                            return (
                                                <table key={e.id} className={style.activityTable}>
                                                    <tbody>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>{e.name.trim()}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Season: </td>
                                                            <td>{e.season}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Duration: </td>
                                                            <td>{e.duration} h</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Difficulty: </td>
                                                            <td>{e.difficulty} points</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            )
                                        })
                                    ) : (
                                        <>
                                            <p className={style.noActivitiesMessage}>No activities in this country yet...</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <NavLink to={'/create'}>
                                {" "}
                                <button className={style.createButton}>Click here to create one!</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}