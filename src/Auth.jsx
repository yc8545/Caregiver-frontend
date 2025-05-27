import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Auth.css";  // We will add styles here

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("User");  // Default role


  return (
    <div className="auth-container">
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2>{isLogin ? "Login to Caregiver" : "Create Your Account"}</h2>

        <form>
          {!isLogin && (
            <motion.input
              key="name"
              type="text"
              placeholder="Full Name"
              className="input-field"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              required
            />
          )}

          <motion.input
            type="email"
            placeholder="Email"
            className="input-field"
            key="email"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            required
          />

          <motion.input
            type="password"
            placeholder="Password"
            className="input-field"
            key="password"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            required
          />

          <motion.select
            className="input-field"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            >
            <option value="Caregiver">Caregiver</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
        </motion.select>


          <motion.button
            type="submit"
            className="btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
          

        </form>

        <motion.p
          className="toggle-text"
          onClick={() => setIsLogin(!isLogin)}
          whileHover={{ scale: 1.1, color: "#ff4757" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isLogin ? "New here? Create an account" : "Already have an account? Login"}
        </motion.p>
      </motion.div>
    </div>
  );
}