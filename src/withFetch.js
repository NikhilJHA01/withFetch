import React, { useState, useEffect } from "react";

const withFetch = (WrappedComponent, url, props) => {
  const WithFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
      };
      fetchData();
    }, [url]);

    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      />
    );
  };

  return WithFetch;
};

export default withFetch;
