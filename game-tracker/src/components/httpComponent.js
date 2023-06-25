import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import ErroServer from './pages/serverError'
import Error from './pages/error'
import './style/loading.css';

function Http() {
  const [dataGames, setDataGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [responseStatus, setResponseStatus] = useState(null);
  const [showServerError, setShowServerError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data',
          {
            headers: {
              'dev-email-address': 'rafafismed@icloud.com',
              'Content-Type': 'application/json',
            },
          }
        );
        setDataGames(response.data);
        setResponseStatus(response.status);
        console.log('Response:', response);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (
      responseStatus === 500 ||
      responseStatus === 502 ||
      responseStatus === 503 ||
      responseStatus === 504 ||
      responseStatus === 507 ||
      responseStatus === 508 ||
      responseStatus === 509
    ) {
      setTimeout(() => {
        setShowServerError(true);
      }, 2000);
    }
  }, [responseStatus]);

  if (isLoading) {
    return (
      <div className="container">
        <h4 className="load_text">Carregando</h4>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    );
  } else if (showServerError) {
    return <Error />;
  } else if (responseStatus === 200) {
    return (
      <div>
        <Pagination dataGames={dataGames} />
      </div>
    );
  } else {
    return <ErroServer />;
  }
}

export default Http;
