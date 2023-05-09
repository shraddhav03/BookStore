import { useContext, useState } from "react";
import { BooksContext } from "..";

export const Profile = () => {
  const { userData } = useContext(BooksContext);

  return (
    <>
      <div>
        <img
          src={userData.img}
          alt={userData.name}
          height="250px"
          width="250px"
        />
        <h2>Name: {userData.name}</h2>
        <p>
          <strong>Bio: </strong>
          {userData.bio}
        </p>
      </div>
    </>
  );
};
