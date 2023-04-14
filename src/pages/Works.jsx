import React from 'react';
import Work from '../components/Work';

const Works = () => {
    const works =['escribir','leer','dibujar','pintar']
    return (
        <div>
            <h1>Listado de Tareas</h1>
            <ul>
                {
                    works.map((work, index)=>{
                        const key= `work-${index}`
                        return (
                            <li key={key} >{work} </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Works;