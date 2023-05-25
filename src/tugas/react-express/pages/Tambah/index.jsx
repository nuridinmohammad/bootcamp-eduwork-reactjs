import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import Input from "../../components/Input";
import { createUser } from "../../utils/apis";

const Tambah = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("address", address);
    formData.append("status", status);
    formData.append("image", image);
    createUser(formData)
    alert("Berhasil Menambah User")
    navigate("/")
  };
  
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah User</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Nama User..."
            label="Nama"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            name="role"
            type="text"
            placeholder="Role User..."
            label="Role"
            value={role || ""}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <Input
            name="address"
            type="text"
            placeholder="Address User..."
            label="Address"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <Input
            name="image"
            type="file"
            label="Image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Input
            name="status"
            type="checkbox"
            label="Active"
            defaultChecked={status}
            onChange={(e) => setStatus(e.target.defaultChecked)}
          />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
