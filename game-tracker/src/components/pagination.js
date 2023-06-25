import React, { useState } from "react";
import Repeater from "./repeaterComponent";
import Buscar from "../assets/img/buscar.svg"
import "./style/pagination_filters.css";

function Pagination({ dataGames }) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchText, setSearchText] = useState("");
  const [filteredGames, setFilteredGames] = useState(dataGames);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setSelectedFilter(selectedFilter);
    applyFilters(searchText, selectedFilter);
  };

  const handleSelectChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setItemsPerPage(selectedValue);
  };

  const handleSearchInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
  };

  const handleSearchButtonClick = () => {
    applyFilters(searchText, selectedFilter);
  };

  const applyFilters = (searchText, selectedFilter) => {
    let filteredData = dataGames;

    if (searchText) {
      filteredData = dataGames.filter(
        (game) =>
          game.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedFilter) {
      filteredData = filteredData.filter(
        (game) =>
          game.genre === selectedFilter ||
          game.platform === selectedFilter ||
          game.developer === selectedFilter
      );
    }

    setFilteredGames(filteredData);
  };

  const genere = [...new Set(dataGames.map((data) => data.genre))];
  const uniquePlatforms = [...new Set(dataGames.map((data) => data.platform))];
  const marcas = [...new Set(dataGames.map((data) => data.developer))];

  const pages = [];
  let itemCount = 0;
  let currentPage = {};

  for (const item of filteredGames) {
    if (itemCount === 0) {
      currentPage = { items: [] };
    }

    currentPage.items.push(item);
    itemCount++;

    if (itemCount === itemsPerPage) {
      pages.push(currentPage);
      itemCount = 0;
    }
  }

  if (itemCount > 0) {
    pages.push(currentPage);
  }

  return (
    <div className="layout_main">
      <div className="mobiler_Menu">
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span className="span__menu"></span>
          </label>

          <ul class="menu__box">
            <li>
                <select className="selection" onChange={handleFilterChange}>
                  <option className="selection_placeholder">Selecione uma Marca</option>
                  {marcas.map((marca, index) => (
                    <option className="selection_item" key={index} value={marca}>
                      {marca}
                    </option>
                  ))}
                </select>
            </li>
            <li>
              
                <select className="selection" onChange={handleFilterChange}>
                  <option className="selection_placeholder">Selecione uma plataforma</option>
                  {uniquePlatforms.map((platform, index) => (
                    <option className="selection_item" key={index} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
     
            </li>
            <li>
       
                <select className="selection" onChange={handleFilterChange}>
                  <option className="selection_placeholder">Selecione um gênero</option>
                  {genere.map((genre, index) => (
                    <option className="selection_item" key={index} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>

            </li>
          </ul>
        </div>
      </div>
      <div className="filter_list">
        <input
          className="filter_input"
          value={searchText}
          onChange={handleSearchInputChange}
          placeholder="Buscar..."
        />
        <button className="filter_button" onClick={handleSearchButtonClick}>
          <img  className="img_button__buscar"  src={Buscar} alt="buscar"/>
        </button>
      </div>

      <div className="layout_main_content">
        <div className="filterOptions">
          <div className="contanier_select">
            <select className="selection" onChange={handleFilterChange}>
              <option className="selection_placeholder">Selecione uma Marca</option>
              {marcas.map((marca, index) => (
                <option className="selection_item" key={index} value={marca}>
                  {marca}
                </option>
              ))}
            </select>
          </div>

          <div className="contanier_select">
            <select className="selection" onChange={handleFilterChange}>
              <option className="selection_placeholder">Selecione uma plataforma</option>
              {uniquePlatforms.map((platform, index) => (
                <option className="selection_item" key={index} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          <div className="contanier_select">
            <select className="selection" onChange={handleFilterChange}>
              <option className="selection_placeholder">Selecione um gênero</option>
              {genere.map((genre, index) => (
                <option className="selection_item" key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="contanier_select">
            <select className="selection" onChange={handleSelectChange}>
              <option className="selection_placeholder">Exibir</option>
              <option className="selection_item" value={20}>
                20
              </option>
              <option className="selection_item" value={50}>
                50
              </option>
              <option className="selection_item" value={100}>
                100
              </option>
              <option className="selection_item" value={dataGames.length}>
                Todos
              </option>
            </select>
          </div>
        </div>
        <>
          <Repeater listaGames={pages} />
        </>
      </div>
    </div>
  );
}

export default Pagination;
