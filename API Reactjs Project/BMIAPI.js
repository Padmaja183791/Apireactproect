import React, { useState } from 'react';
import './BMI.css';

const BMIAPI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 25) {
      category = 'Normal weight';
    } else if (bmi > 25 && bmi <= 30) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    setBmiResult({
      bmi: bmi.toFixed(2),
      category: category
    });
  };

  return (
    <div className='center-card'>
      <div className="card">
        <h3 className="calculate-heading"><b>Calculate your BMI</b></h3>
        <div>
          <h6>Height (m):</h6>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
          />
        </div>
        <div>
          <h6>Weight (kg):</h6>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
          />
        </div>
        <br /><br />
        <a onClick={calculateBMI} className="calculate">Calculate BMI</a>
        <div id="result" className="mt-3">
          {bmiResult && (
            <div className="alert alert-success">
              Your BMI is: {bmiResult.bmi} ({bmiResult.category})
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMIAPI;
