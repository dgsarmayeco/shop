import React, { useEffect, useState } from "react";

function Spinner() {
  const [loading, setLoading] = useState(true);

  // Simulating an API call
  const fetchData = async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await fetchData();
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <span className="loader"></span>
    </div>
  ) : (
    ""
  );
}

export default Spinner;
