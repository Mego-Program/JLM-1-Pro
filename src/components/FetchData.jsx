import data from './mockData/data';

useEffect(() => {
    const fetchData = async () => {
        console.log(data)
      // try {
      //   const response = await fetch('');
      //   const jsonData = await response.json();
      //   setData(jsonData);
      //   setFilteredData(jsonData);
      // } catch (error) {
      //   console.error(error);
      // }
    };
    fetchData();
  }, []);