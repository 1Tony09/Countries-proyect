import React, { useState } from "react";
import Details from '../../Views/Details/Details'
import style from './Card.module.css'

export default function Card({ name, continent, flag, id }) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    return (
        <React.Fragment>
            {open ? <Details handleClose={handleClose} id={id} /> : null}
            <div className={style.cardContainer}>
                <img src={flag} alt={`Flag of ${name}`} className={style.flag} />
                <div className={style.infoContainer}>
                    <h2 className={style.name}>{name}</h2>
                    <p>{id}</p>
                    <p>{continent}</p>
                </div>

                <button className={style.cardButton} onClick={handleClickOpen}>More info</button>
            </div>
        </React.Fragment>
    )
}