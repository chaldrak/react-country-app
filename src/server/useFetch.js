import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return {data, isLoading};
}

export default useFetch;