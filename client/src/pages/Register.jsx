import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:4500/api/auth/register", form);
      alert("Registered successfully ✅");
      setForm({ fullName: "", email: "", phone: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card bg-secondary text-secondary-content w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          name="fullName"
          placeholder="Full Name"
          className="input input-bordered mb-2 w-full"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="input input-bordered mb-2 w-full"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          className="input input-bordered mb-2 w-full"
          value={form.phone}
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
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
