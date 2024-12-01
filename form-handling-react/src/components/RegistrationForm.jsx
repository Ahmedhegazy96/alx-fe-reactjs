import React, { useState } from "react";

const RegistrationForm = () => {
  // State variables for input fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validation functions
  const validateEmail = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setError("Password is required");
      return false;
    }
    return true;
  };

  const validateUsername = () => {
    if (!username) {
      setError("Username is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run separate validations
    if (!validateUsername() || !validateEmail() || !validatePassword()) {
      return;
    }

    // Clear errors and log data
    setError("");
    console.log("Form submitted:", { username, email, password });
    alert("Registration successful!");
    // Reset form (optional)
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

// import React, { useState } from "react";

// const RegistrationForm = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // State for validation errors
//   const [errors, setErrors] = useState({});

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Validate form fields
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.username) newErrors.username = "Username is required.";
//     if (!formData.email) newErrors.email = "Email is required.";
//     if (!formData.password) newErrors.password = "Password is required.";
//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       console.log("Form submitted successfully:", formData);
//       setErrors({});
//       alert("Registration successful!");
//       // Clear form (optional)
//       setFormData({
//         username: "",
//         email: "",
//         password: "",
//       });
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "0 auto" }}>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "16px" }}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             style={{ display: "block", width: "100%", padding: "8px" }}
//           />
//           {errors.username && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {errors.username}
//             </span>
//           )}
//         </div>

//         <div style={{ marginBottom: "16px" }}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ display: "block", width: "100%", padding: "8px" }}
//           />
//           {errors.email && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {errors.email}
//             </span>
//           )}
//         </div>

//         <div style={{ marginBottom: "16px" }}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ display: "block", width: "100%", padding: "8px" }}
//           />
//           {errors.password && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {errors.password}
//             </span>
//           )}
//         </div>

//         <button type="submit" style={{ padding: "10px 20px" }}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
