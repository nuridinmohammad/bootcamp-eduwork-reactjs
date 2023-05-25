import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { deleteUser, getAllUser, getAllUserBySearch } from "../../utils/apis";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  if (resultSearch) {
    useEffect(() => {
      getAllUserBySearch(search)
        .then((res) => setResultSearch(res.data))
        .catch((err) => err);
    }, [search]);
  } else {
    getAllUser().then((result) => setUsers(result.data));
  }


  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah User
      </Link>
      <div className="search">
        <input
          type="text"
          placeholder="Masukan kata kunci..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {resultSearch
            ? resultSearch.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td className="text-right">{user.status.toString()}</td>
                    <td className="text-center">
                      <Link
                        to={`/detail/${user._id}`}
                        className="btn btn-sm btn-info"
                      >
                        Detail
                      </Link>
                      <Link
                        to={`/edit/${user._id}`}
                        className="btn btn-sm btn-warning"
                      >
                        Edit
                      </Link>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const result = confirm(
                            "Are you sure wanna delete User?\n" +
                              "ID : " +
                              user._id +
                              "\n" +
                              `Name : ${user.name}`
                          );
                          if (result) {
                            deleteUser(user._id);
                            window.location.reload();
                          }
                          return false;
                        }}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })
            : users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td className="text-right">{user.status.toString()}</td>
                    <td className="text-center">
                      <Link
                        to={`/detail/${user._id}`}
                        className="btn btn-sm btn-info"
                      >
                        Detail
                      </Link>
                      <Link
                        to={`/edit/${user._id}`}
                        className="btn btn-sm btn-warning"
                      >
                        Edit
                      </Link>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const result = confirm(
                            "Are you sure wanna delete User?\n" +
                              "ID : " +
                              user._id +
                              "\n" +
                              `Name : ${user.name}`
                          );
                          if (result) {
                            deleteUser(user._id);
                            window.location.reload();
                          }
                          return false;
                        }}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
