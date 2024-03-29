import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../utils/utils";
import { fetchUsersFromJSONPlaceholder } from "../../toolkit/slices/fetchUsersSlice";
import { useDispatch } from "react-redux";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      const fetchUsersFromJSONPlaceholderRes = await dispatch(
        fetchUsersFromJSONPlaceholder()
      ).unwrap();
      setUsers(fetchUsersFromJSONPlaceholderRes);
    } catch (error) {
      setError(error);
      // console.error("Error in fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
