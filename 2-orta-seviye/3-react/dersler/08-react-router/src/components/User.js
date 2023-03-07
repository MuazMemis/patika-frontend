import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {isLoading && <div>Loading...</div>}
      {/* <span>id: {id}</span> */}
      {!isLoading && <code>{JSON.stringify(user)}</code>}

      <br />
      <br />

      {parseInt(id) - 1 > 0 && (
        <Link to={`/users/${parseInt(id) - 1}`}>
          Previous User ({parseInt(id) - 1})
        </Link>
      )}

      {parseInt(id) + 1 < 11 && (
        <Link to={`/users/${parseInt(id) + 1}`}>
          Next User ({parseInt(id) + 1})
        </Link>
      )}
    </div>
  );
}

export default User;
