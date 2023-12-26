
import React from "react";

const BinaryVisualizer = ({ array, searchElement, resultIndex }) => {
  if (!Array.isArray(array)) {
    return null;
  }

  const highlightIndex = resultIndex !== null ? resultIndex : -1;
  const halfIndex = Math.floor(array.length / 2);

  return (
    <div>
      
      <h3>Array Visualization</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {array.map((num, index) => (
          <div
            key={index}
            style={{
              border: '1px solid black',
              padding: '5px',
              margin: '2px',
              backgroundColor:
                highlightIndex === index ? 'lightgreen' : 'lightblue',
            }}
          >
            {num}
          </div>
        ))}
      </div>
      <p>Search Element: {searchElement}</p>
    </div>
  );
};

export default BinaryVisualizer;
