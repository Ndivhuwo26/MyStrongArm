import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null); // Success or error message
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setMessage(null); // Clear previous messages
    if (!username || !password) {
      setMessage({ type: "error", text: "Please fill in both fields." });
      return;
    }

    try {
      setLoading(true); // Start loading
      // Mock API request
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        username: username,
        password: password,
      });

      // Simulate success response
      if (response.status === 201) {
        setMessage({ type: "success", text: "Login successful! 🎉" });
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      // Handle error response
      setMessage({
        type: "error",
        text: "Login failed. Please check your credentials.",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* Message Display */}
      {message && (
        <div className={message.type === "success" ? "success" : "error"}>
          {message.text}
        </div>
      )}
      {/* Login Form */}
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
