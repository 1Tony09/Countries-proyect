import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './Form.module.css'
import {postActivity, getActivities} from '../../Redux/Actions/actions'


export function validate(input) {
    let errors = {};
    if(!input.name) {
        errors.name = 'Name is required';
    } else if(!/^[A-Z][a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.name)){
        errors.name = 'The name must start with an uppercase letter and contain letters only.';
    }
    if(!input.difficulty){
        errors.difficulty = 'Difficulty is required';
    } else if(input.difficulty < 1 || input.difficulty > 5){
        errors.difficulty = 'Only values between 1 and 5 allowed';
    }
    if(!input.duration){
        errors.duration = 'Duration is required';
    } else if(input.duration <= 0) {
        errors.duration = 'The duration must be a positive value';
    }
    if(!input.season) {
        errors.season = 'Season is required';
    } else if(!input.season.length) {
        errors.season = 'Select a season from the list.';
    }
    if(!input.countries.length) {
        errors.countries = 'Select at least one country from the list.';
    }
    return errors;
}


export default function Form() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    });

    const [error, setError] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});
        dispatch(postActivity(state));
        setState({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: [],
        })
    };

    const buttonDisabled = Object.entries(error).length ? true : false;
    
    return (
        <div className={style.formContainer}>
            <form action='' className={style.form}>
                <label>Name: </label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
            </form>
        </div>
    )
}

/* 
Por supuesto, vamos a desglosar la función CreateActivity paso a paso:

Inicialización de la función: CreateActivity es una función que acepta un objeto data como prop. Este objeto data probablemente proviene de un componente padre y puede contener información que este componente necesita.

Uso de Redux: Dentro de la función, se utiliza el hook useDispatch de Redux para obtener la función dispatch. Esta función se utiliza para enviar acciones a la tienda de Redux.

Estado local: Se utilizan dos hooks useState para crear dos variables de estado local: input y error. input almacena los datos del formulario y error almacena los errores de validación. Ambos son inicialmente objetos vacíos.

Función handleInputChange: Esta función se ejecuta cada vez que el usuario cambia el valor de un campo del formulario. Si hay un error o un éxito en data, se limpian utilizando las acciones cleanError y cleanSuccess. Luego, dependiendo de si el campo cambiado es "countries" o no, se actualiza el estado input de manera correspondiente. Finalmente, se valida el nuevo estado input y se actualiza el estado error.

Función handleSubmit: Esta función se ejecuta cuando el usuario envía el formulario. Primero, se previene el comportamiento predeterminado del evento (que es recargar la página). Luego, se limpia el estado error, se envía la acción createActivity a la tienda de Redux con los datos del formulario, y se limpia el estado input.

Renderizado: En la sección de renderizado, se crea un formulario con varios campos de entrada y selección. Cada campo tiene un manejador de eventos onChange que ejecuta la función handleInputChange. También se muestran los mensajes de error si hay algún error de validación. Finalmente, se renderiza un botón que, cuando se hace clic, envía el formulario y ejecuta la función handleSubmit.
*/

// OTRO METODO DE HACER EL DISABLED
// let disabled = false;
// for (let key in error) {
//     disabled = true;
//     break;
// }

// EL OBJECT.ENTRIES convierte lo que le pasa por error a un ARRAY DE ARRAYS, al transformarlo uso .length para ver si existe algo en ese ARRAY DE ARRAYS, si existe algo es que quiere decir que hay un error y se establece en true, si no hay nada es false.

// La diferencia en countries en el error y en el input, es que en el error almaceno un mensaje de error y en el input almaceno uno o varios paises. Se utilizan para distintos propositos.