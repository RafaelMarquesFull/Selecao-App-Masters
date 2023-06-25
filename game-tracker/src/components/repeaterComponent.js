import React, { useState } from 'react';
import './style/repeater.css';
import urlIcon from '../assets/img/IconUrl.svg';
import dateIcon from '../assets/img/iconDate.svg';
import { format } from 'date-fns';

function Repeater({ listaGames }) {
  const page = listaGames.length > 0 ? listaGames[0].items : [];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const formatarData = (data) => {
    // Utilize a função format para formatar a data
    const dataFormatada = format(new Date(data), 'dd/MM/yyyy');
    return dataFormatada;
  };

  return (
    <div className="container_repeater">
      {page.map((data, index) => (
        <div key={index} className="container_repeater__item">
          <div className="img__game">
            <img className="img" src={data.thumbnail} alt={`Imagem ${index}`} />
          </div>
          <div className="repeater_bar">
            <h3 className="title-game">{data.title}</h3>
          </div>
          <div className="box_Description_Item">
            <p className="text_item">
              {expandedIndex === index ? data.short_description : `${data.short_description.slice(0, 50)}...`}
            </p>
          </div>
          <div className="container_button_repeater">
            {expandedIndex === index && (
              <div className="containe_icones">
                <div className="container_IconDate">
                  <img className="icons" src={dateIcon} alt="Icone url" />
                  <label className='dataRelease'>Lançamento:<br/> {formatarData(data.release_date)}</label> 
                </div>
                <a href={data.freetogame_profile_url}>
                  <img className="icons" src={urlIcon} alt="Icone data" />
                </a>
              </div>
            )}
            {data.short_description.length > 10 && (
              <button className="read-more" onClick={() => handleToggleExpand(index)}>
                {expandedIndex === index ? 'Esconder' : 'Ver Mais'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repeater;
