import React, { useState } from "react";

const App = () => {
  // State to hold all field pairs
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  // Handle input value change
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  // Add a new empty field pair
  const handleAddField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  // Remove a specific field pair
  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", fields);
    alert(JSON.stringify(fields, null, 2));
  };

  return (
    <div id="main" style={{ margin: "20px" }}>
      <h2>Dynamic Form Fields</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
              style={{ padding: "5px" }}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              style={{ padding: "5px", width: "80px" }}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Remove
            </button>
          </div>
        ))}

        <div style={{ marginTop: "15px" }}>
          <button
            type="button"
            onClick={handleAddField}
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Add More..
          </button>

          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#008CBA",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
