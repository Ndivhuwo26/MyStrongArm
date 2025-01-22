import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login and Register
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!username || !password || (isRegister && !email)) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    try {
      setLoading(true);

      // Mock API URL
      const url = isRegister
        ? "https://jsonplaceholder.typicode.com/users" // Replace with your register API
        : "https://jsonplaceholder.typicode.com/posts"; // Replace with your login API

      const data = isRegister
        ? { username, email, password }
        : { username, password };

      const response = await axios.post(url, data);

      if (response.status === 201 || response.status === 200) {
        setMessage({
          type: "success",
          text: isRegister
            ? "Registration successful! 🎉 Please log in."
            : "Login successful! 🎉",
        });
        setUsername("");
        setEmail("");
        setPassword("");
        if (isRegister) setIsRegister(false); // Redirect to login after registration
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: isRegister
          ? "Registration failed. Please try again."
          : "Login failed. Please check your credentials.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      {message && (
        <div className={message.type === "success" ? "success" : "error"}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        {isRegister && (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-button" disabled={loading}>
          {loading
            ? isRegister
              ? "Registering..."
              : "Logging in..."
            : isRegister
            ? "Register"
            : "Login"}
        </button>
      </form>

      {/* Toggle between Login and Register */}
      <p className="toggle-text">
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="toggle-link"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Login" : "Register"}
        </span>
      </p>
    </div>
  );
};

export default LoginRegister;
