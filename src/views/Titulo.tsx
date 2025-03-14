import React from 'react'
function Titulo() {
    const nombre = "Santiago";
    if (nombre) {
        return (
            <h1>Hola {nombre}</h1>
        )
    }
    return (
        <h2>Hola Mundo Cruel</h2>
    )

}
export default Titulo;