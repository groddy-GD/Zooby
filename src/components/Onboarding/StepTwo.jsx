import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

const StepTwo = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "+91",
    // email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.gender) newErrors.gender = "Select gender";
    if (!formData.age || isNaN(formData.age)) newErrors.age = "Enter valid age";
    if (!/^[6-9]\d{9}$/.test(formData.phone.replace("+91", "")))
      newErrors.phone = "Enter valid 10-digit phone number";
    // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    //   newErrors.email = "Enter valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="w-full max-w-lg flex flex-col gap-4">
        <p className="text-black text-sm my-2">Basic info</p>
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        size="small" 
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
        helperText={errors.name}
      />

      <TextField
        select
        label="Gender"
        variant="outlined"
        fullWidth
        size="small" 
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        error={!!errors.gender}
        helperText={errors.gender}
      >
        <MenuItem value="">Select Gender</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </TextField>

      <TextField
        label="Age"
        type="number"
        variant="outlined"
        fullWidth
        size="small" 
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        error={!!errors.age}
        helperText={errors.age}
      />

      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        size="small" 
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        error={!!errors.phone}
        helperText={errors.phone}
      />

      {/* <TextField
        label="Email ID"
        type="email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
        helperText={errors.email}
      /> */}

<div className="flex gap-4 mt-4">
        <button onClick={prevStep} className="flex-1 bg-gray-400 text-white py-2 rounded">Back</button>
        <button onClick={handleNext} className="flex-1 bg-blue-600 text-white py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
