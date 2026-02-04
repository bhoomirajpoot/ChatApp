import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:4500/api/auth/login", form);
      loginUser(res.data); // Context me save
      alert("Login successful ✅");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card bg-secondary text-secondary-content w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          name="email"
          placeholder="Email"
          className="input input-bordered mb-2 w-full"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered mb-4 w-full"
          value={form.password}
          onChange={handleChange}
        />

        <button onClick={handleSubmit} className="btn btn-primary w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
