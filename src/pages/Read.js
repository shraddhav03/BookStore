import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BooksContext } from "..";

export const Read = () => {
  const { data, setData } = useContext(BooksContext);
  const navigate = useNavigate();
  const readBooks = data.filter((books) => books.read);

  const addToUnread = (readId) => {
    setData(
      data.map((item) => {
        if (item.id === readId) {
          item.read = false;
        }
        return item;
      })
    );
  };

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
      {readBooks.length > 0 ? (
        <div className="main-container">
          <div className="flex-container">
            {readBooks.map(({ id, title, image, author, read, favourite }) => {
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
                      onClick={() => addToUnread(id)}
                      disabled={!read ? true : false}
                    >
                      Mark as Unread
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
      ) : (
        <div>
          <p>You have not any book yet!!!</p>
        </div>
      )}
    </>
  );
};
