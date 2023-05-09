import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "..";

export const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    margin: "1 rem 0",
    fontWeight: isActive ? "600" : "400",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : ""
  });
  const { data } = useContext(BooksContext);
  const count = data.reduce(
    (acc, curr) => (curr?.favourite ? acc + curr?.favourite : acc),
    0
  );

  return (
    <>
      <div>
        <h1>All Books</h1>
        <nav>
          <NavLink style={getActiveStyle} to="/">
            All Books
          </NavLink>
          <NavLink style={getActiveStyle} to="/favourites">
            Favourites({count})
          </NavLink>
          <NavLink style={getActiveStyle} to="/read">
            Read
          </NavLink>
          <NavLink style={getActiveStyle} to="profile">
            Profile
          </NavLink>
        </nav>
      </div>
    </>
  );
};
