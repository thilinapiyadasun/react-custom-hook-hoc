const { useState, useEffect } = require("react");

const UseFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const resposeData = await response.json();
      console.log(resposeData);
      setData(resposeData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, isLoading };
};

export default UseFetch;
