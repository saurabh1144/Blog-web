import { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const Form = () => {
  const [current, setCurrent] = useState(0);
  const formInfo = ["Personal Info", "Address", "Conatct"];
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
  });
  // const forms=[<First/>,<Second/>,<Third/>]

  function pageDisplay() {
    if (current === 0) {
      return <First formData={formData} setFormData={setFormData} />;
    } else if (current === 1) {
      return <Second formData={formData} setFormData={setFormData} />;
    } else {
      return <Third formData={formData} setFormData={setFormData} />;
    }
  }
  return (
    <div className="form">
      <div className="progressbar">
        <span>
          <h1 style={{ color: current === 0 ? "red" : "black" }}>1</h1>
        </span>

        <span>
          <h1 style={{ color: current === 1 ? "red" : "black" }}>2</h1>
        </span>
        <span>
          <h1 style={{ color: current === 2 ? "red" : "black" }}>3</h1>
        </span>
      </div>
      <div className="form-container">
        <div className="header">{formInfo[current]}</div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            style={{ visibility: current === 0 ? "hidden" : "visible" }}
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (current === formInfo.length - 1) {
                alert("Form Submitted");
              } else {
                setCurrent(current + 1);
              }
            }}
          >
            {current === 2 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
