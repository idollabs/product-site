import { useEffect, useCallback, useState } from 'react';

export const useFetch = (url: string, init: object) => {
  const [dataValues, setDataValues] = useState([]);

  const getData = useCallback(async (url: string, init: object) => {
    const response = await fetch(url, init);
    const data = await response.json();
    setDataValues(data);
  }, []);

  useEffect(() => {
    getData(url, init);
  }, [getData, url, init]);

  return dataValues;
};
