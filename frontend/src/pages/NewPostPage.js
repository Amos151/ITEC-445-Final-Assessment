import React, { useEffect, useState } from "react";

const NewPostPage = ({ isValidated }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isValidated || false);
  return (
    <>
      {isLoggedIn ? (
        <div className="pgbody">
          <p>This page is only accessible to users who are logged in</p>
        </div>
      ) : (
        <div className="pgbody">
          <h1>New Post Page</h1>
          <p>
            Build out this page so that an authenticated user can post new blog
            items to the site
          </p>
        </div>
      )}
    </>
  );
};

export default NewPostPage;
