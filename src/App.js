import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  // se inicializa el pais en colombia dentro del state por que la api lo requiere
  // en el caso de la categoría si no se ha elegido una por default se pone 'general'
  const [pais, guardarPais] = useState('co');
  const [noticias,guardarNoticia] = useState([]);
  

  // consultar la API
  useEffect(()=>{
    const consultarAPi = async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=56813720afda45abb35c34c4c5c4d736`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticia(noticias.articles);
    }
    consultarAPi();
  },[categoria,pais]);

  return (
    <Fragment>
      <Header
        titulo="Noticias React"
      />

      <div className="container white">
        <Formulario
          guardarCategoria = {guardarCategoria}
          guardarPais = {guardarPais}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>

    </Fragment>
  );
}

export default App;
