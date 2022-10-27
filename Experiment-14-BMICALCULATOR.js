import React, { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);

  const calci = () => {
    var squaredheight = (height / 100) * (height / 100);
    var bmi = weight / squaredheight;

    if (bmi < 16)
      window.alert(
        "Hi.." + name + "...You are completely UnderWeight (Severe Thinner)"
      );
    else if (bmi >= 16 && bmi < 17)
      window.alert(
        "Hi.." + name + "...You are Moderately UnderWeight (Moderate Thinner)"
      );
  };

  const submitMe = (e) => {
    e.preventDefault();
    calci();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="calci">
      <h1>BMI Calculator</h1>
      <form onSubmit={submitMe}>
        <label>Please enter your name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <br />
        <br />
        <label>Enter your height in cm:</label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={handleHeight}
        />
        <br />
        <br />
        <label>Enter your weight in kg :</label>
        <br />
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={handleWeight}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Bmi;
