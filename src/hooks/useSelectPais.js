import React, {useState} from 'react';

const useSelectPais = (stateInicial, opciones) => {
    const[state,guardarState] = useState(stateInicial);
    const SelectPais = ()=>(
        <select
            className="browser-default"
            value={state}
            onChange= {e =>{guardarState(e.target.value)}}
        >
            {opciones.map(opcion =>(
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );
    return[state,SelectPais]
};

export default useSelectPais;