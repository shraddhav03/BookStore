import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { BooksContext } from "..";
export const FavBookContext = createContext();

export const FavBookProvider = ({ children }) => {
  const { bookId } = useParams();
  const { data } = useContext(BooksContext);
  const [fav, setFav] = useState([]);

  console.log(data);
  const addTofavourite = (book) => {
    setFav((fav) => [...fav]);
  };

  return (
    <>
      {data && (
        <div>
          <FavBookContext.Provider value={{ data }}>
            {children}
          </FavBookContext.Provider>
        </div>
      )}
    </>
  );
};
