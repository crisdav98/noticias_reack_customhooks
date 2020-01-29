import React from "react";
import PropTypes from 'prop-types';


const Noticia = ({ noticia }) => {
  
  const { urlToImage, url, title, description, source } = noticia;
 
  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;
 
  return (
    <div className="col s-12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};

Noticia.propTypes ={
  noticia: PropTypes.object.isRequired
}

export default Noticia;
