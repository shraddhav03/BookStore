import { useContext } from "react";
import { BooksContext } from "..";

export const Favourites = () => {
  const { data, setData } = useContext(BooksContext);

  const favouriteBooks = data.filter((books) => books?.favourite);
  console.log(favouriteBooks);

  const addToRead = (readId) => {
    setData(
      data.map((item) => {
        if (item.id === readId) {
          item.read = true;
        }
        return item;
      })
    );
  };
  const removeFromFavourite = (favId) => {
    setData(
      data.map((item) => {
        if (item.id === favId) {
          item.read = true;
        }
        return item;
      })
    );
  };

  return (
    <>
      {favouriteBooks.length > 0 ? (
        <div className="main-container">
          <div className="flex-container">
            {favouriteBooks.map(
              ({ id, title, image, author, read, favourite }) => {
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
                      <button onClick={() => removeFromFavourite(id)}>
                        Remove From Favourite
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ) : (
        <div>
          <p>No Favourite books selected</p>
        </div>
      )}
    </>
  );
};
