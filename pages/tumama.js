import React, { useState } from 'react'
import axios from 'axios'



const tumama = () => {


console.log("bolas",process.env)

    const[nombre, setNombre] = React.useState('');
    const[mail, setMail] = React.useState('');

    function agregar(e){
        e.preventDefault();

        const user={
            name: nombre,
            email: mail,
        }
        console.log(user)

        axios.post('http://localhost/3002/api/register', user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div>
        <form>
            <input type="text" placeholder="nombre" value={nombre} onChange={(e)=> {setNombre(e.target.value)}} />
            <input type="text" placeholder="email"  value={mail} onChange={(e)=> {setMail(e.target.value)}}/>

            <button onClick={agregar}>Enviar</button>
        </form>

    </div>
  )
}

export default tumama