import React from 'react';
import style from './Home.module.css'
import Card from '../../Components/Card/Card'


export default function Home({ data }) {
    if(data.length) {
        return (
            <div className={style.container}>
                <div className={style.cardContainer}>
                    {data.map((country) => {
                        return (
                            <Card 
                                key={country.id}
                                flag={country.flag}
                                name={country.name}
                                continent={country.continent}
                                id={country.id}
                            />
                        )
                    })}
                </div>
            </div>
        );
    } else 
        return (
            <>
                <h1 className={style.loadingTitle}>Loading...</h1>
                <div className={style.loading}></div>
            </>
        )
}