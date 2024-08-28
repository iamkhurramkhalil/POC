import { useState, useEffect } from "react";
import axios from "axios";

const useStudents = (apiUrl) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(apiUrl);
        setStudents(response?.data?.results || []);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [apiUrl]);

  return { students, loading, error };
};

export default useStudents;
