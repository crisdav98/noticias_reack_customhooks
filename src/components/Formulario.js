import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import useSelectPais from "../hooks/useSelectPais";
import PropTypes from "prop-types";


const Formulario = ({guardarCategoria, guardarPais}) => {

  const opcionesCategoria = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertaiment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnología'},
  ]

  const opcionesPais = [
    {value: "ar", label: "Argentina"},
    {value: "co", label: "Colombia"},
    {value: "fr", label: "Francia"},
    {value: "jp", label: "Japón"},
    {value: "mx", label: "México"},
    {value: "ru", label: "rusia"},
    {value: "us", label: "Estados Unidos"},
    {value: "ve", label: "Venezuela"}
  ]
    //utilizar custom hooks
    const [categoria, SelectNoticias] = useSelect('general', opcionesCategoria);
    const [pais,SelectPais] = useSelectPais('co', opcionesPais);

    // al pulsar submit enviar la categoria al componente principal
    const recogerCategoria = e =>{
      e.preventDefault();
      guardarCategoria(categoria);
      guardarPais(pais);
    }
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
          <form
            onSubmit= {recogerCategoria}
          >
              <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
              <SelectNoticias />
              <SelectPais />
              <div className="input-field col s12">
                  <input 
                    type="submit"
                    className={`${styles['btn-block']} btn-large amber darken-2`}
                    value="Buscar" 
                    /> 
              </div>
          </form>
      </div>
    </div>
  );
};

Formulario.propTypes={
  guardarCategoria: PropTypes.func.isRequired,
  guardarPais: PropTypes.func.isRequired
}

export default Formulario;
