// import React from "react";
//  import './Verify.css'

// const Verify = () => {
//   const inputs = [1, 2, 3, 4];
 
//   return (
//     <div className="simple-verification-container">
      
//       <h1>Verification Code</h1>
//       <p className="er">Please type the verification code sent to your email@example.com</p>
//       <div className="simple-code-inputs">
//         {inputs.map((_, index) => (
//           <input
//             key={index}
//             className="simple-code-input"
//             type="text"
//             maxLength="1"
//             placeholder="•"
//           />
//         ))}
//       </div>
//       <p className="simple-resend-text">
//         I don’t receive a code!{" "}
//         <span className="simple-resend-link">Please resend</span>
//       </p>
//     </div>
//   );
// };
 
// export default Verify;


import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Verify.css';

const Verify = () => {
  const [code, setCode] = useState(["", "", "", ""]); 
  const inputRefs = useRef([]); 
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (value.length > 1) return; 

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

   
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    
    if (index === code.length - 1 && value) {
      navigate("/Register");
    }
  };

  return (
    <div className="simple-verification-container">
      <h1>Verification Code</h1>
      <p className="kk">Please type the verification code sent to your email@example.com</p>
      <div className="simple-code-inputs">
        {code.map((char, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)} 
            type="text"
            maxLength="1"
            value={char}
            className="simple-code-input"
            onChange={(e) => handleChange(e.target.value, index)}
            placeholder="•"
          />
        ))}
      </div>
      <p className="simple-resend-text">
        I don’t receive a code! <span className="simple-resend">Please resend</span>
      </p>
    </div>
  );
};

export default Verify;


