import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getUser } from "../../utils/apis";
import './index.scss';

const Detail = () => {
  const [user, setUser] = useState({});
  const {id} = useParams()

  useEffect(() => {
    getUser(id).then((result) => setUser(result.data));
  }, []);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {user._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {user.name}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>: {user.address}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>: {user.role}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>: {String(user.status)}</td>
          </tr>
          <tr>
            <td>Image</td>
            <td>: <img src={user.image_url} alt="image" style={{height:"180px"}}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;