import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/fakefetch";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/books");
      if (response.status === 200) {
        setData(response.data.books);
        setUserData(response.data.user);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && (
        <div>
          <BooksContext.Provider value={{ data, setData, userData }}>
            {children}
          </BooksContext.Provider>
        </div>
      )}
    </>
  );
};
