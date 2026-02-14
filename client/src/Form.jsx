import { useState } from "react";
import "./App.css";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    employmentStatus: "",
    portfolio: "",
    github: "",
    about: "",
    cv: null,
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved locally!");
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      employmentStatus: "",
      portfolio: "",
      github: "",
      about: "",
      cv: null,
      picture: null,
    });
    localStorage.removeItem("formData");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="FrTitle">Registration Form</h2>

      {/* Row 1 */}
      <div className="form-row">
        <h3 className="Frinput">Full Name: </h3>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <h3 className="Frinput">Email: </h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Row 2 */}
      <div className="form-row">
        <h3 className="Frinput">Phone Number: </h3>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <h3 className="Frinput">Education: </h3>
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
        />
      </div>

      {/* Row 3 */}
      <div className="form-row">
        <h3 className="Frinput">Experience: </h3>
        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={formData.experience}
          onChange={handleChange}
        />
        <h3 className="Frinput">Employee Status: </h3>
        <input
          type="text"
          name="employmentStatus"
          placeholder="Employment Status"
          value={formData.employmentStatus}
          onChange={handleChange}
        />
      </div>

      {/* Files */}
      <div className="form-row">
        <h3 className="Frinput">Upload CV: </h3>
        <input type="file" name="cv" onChange={handleChange} />

        <h3 className="Frinput">Upload Picture:</h3>
        <input type="file" name="picture" onChange={handleChange} />

        {formData.picture && (
          <img
            src={URL.createObjectURL(formData.picture)}
            alt="Preview"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              marginTop: "10px",
            }}
          />
        )}
      </div>

      {/* Links */}
      <div className="form-row">
        <h3 className="Frinput">Portfolio Link: </h3>
        <input
          type="url"
          name="portfolio"
          placeholder="Portfolio Link"
          value={formData.portfolio}
          onChange={handleChange}
        />
        <h3 className="Frinput">GitHub Link: </h3>
        <input
          type="url"
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleChange}
        />
      </div>

      {/* About */}
      <h3 className="Frinput">Tell us about yourself</h3>
      <textarea
        name="about"
        placeholder="Tell us about yourself"
        value={formData.about}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <div>
        {" "}
        <button type="button">Continue</button>
      </div>
    </form>
  );
}

export default Form;
