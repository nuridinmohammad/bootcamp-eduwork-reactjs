import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../utils/apis";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUser(id).then((result) => {
      setName(result.data.name);
      setRole(result.data.role);
      setAddress(result.data.address);
      setImage(result.data.image_url);
      setStatus(result.data.status);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("address", address);
    formData.append("status", status);
    formData.append("image", image);
    try {
      updateUser(id, formData);
      alert("Berhasil Edit User Id :" + id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Edit User</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Nama User..."
            label="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            name="role"
            type="text"
            placeholder="Role User..."
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <Input
            name="address"
            type="text"
            placeholder="Address User..."
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <Input
            name="image"
            type="file"
            label="Image"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {preview ? (
            <img style={{ height: "125px" }} src={preview} alt={preview.name} />
          ) : (
            <img style={{ height: "125px" }} src={image} alt={image} />
          )}
          <Input
            name="status"
            type="checkbox"
            label="Active"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
