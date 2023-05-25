import axios from "axios";

export const getAllUser = async () => {
  const users = await axios.get(`http://localhost:3001/api/v4/users`);
  return users;
};

export const getAllUserBySearch = async (value) => {
  const users = await axios.get(
    `http://localhost:3001/api/v4/users?search=${value}`
  );
  return users;
};

export const getUser = async (id) => {
  const user = await axios.get(`http://localhost:3001/api/v4/user/${id}`);
  return user;
};

export const deleteUser = async (id) => {
  const user = await axios.delete(`http://localhost:3001/api/v4/user/${id}`);
  return user;
};

export const createUser = async (data) => {
  return await axios.post(`http://localhost:3001/api/v4/user`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateUser = async (id, data) => {
  const user = await axios
    .put(`http://localhost:3001/api/v4/user/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  return user;
};
