import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BooksContext } from "..";
import "../css/Home.css";

export const HomePage = () => {
  const { data, setData } = useContext(BooksContext);
  const [readBooks, setReadBooks] = useState([]);
  // const []
  const navigate = useNavigate();

  const addToRead = (readId) => {
    // const readItem = data.filter(({ id }) => id === readId);
    // setReadBooks(readItem);
    setData(
      data.map((item) => {
        if (item.id === readId) {
          item.read = true;
        }
        return item;
      })
    );
  };
  // console.log
  console.log("read", data);
  const addToFavourite = (favId) => {
    setData(
      data.map((item) => {
        if (item.id === favId) {
          item.favourite = true;
        }
        return item;
      })
    );
  };
  const gotoFavoritePageHandler = () => {
    navigate("/favourites");
  };
  return (
    <>
      <div className="main-container">
        <div className="flex-container">
          {data.map(({ id, title, image, author, read, favourite }) => {
            return (
              <div key={id} className="card-container">
                <div className="image-container">
                  <img src={image} alt={title} className="image-card" />
                </div>
                <div>
                  <p>{id}</p>
                  <p>Title:{title}</p>
                  <p>Author:{author}</p>
                </div>
                <div>
                  <button
                    onClick={() => addToRead(id)}
                    disabled={!read ? true : false}
                  >
                    {read ? "Mark as Read" : "Already Read"}
                  </button>
                  <button
                    onClick={
                      !favourite
                        ? () => addToFavourite(id)
                        : () => gotoFavoritePageHandler(id)
                    }
                  >
                    {!favourite ? "Add To Favourite" : "Go to Favourite"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
