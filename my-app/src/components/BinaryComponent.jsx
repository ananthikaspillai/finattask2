
import React, { useState, useEffect } from 'react';
import BinaryVisualizer from './BinaryVisualizer';

const BinaryComponent = () => {
  const [inputNumbers, setInputNumbers] = useState('');
  const [element, setElement] = useState('');
  const [result, setResult] = useState(null);
  const [visualizerData, setVisualizerData] = useState({
    array: [],
    searchElement: null,
    resultIndex: null,
  });
  const [executionTime, setExecutionTime] = useState(null);

  useEffect(() => {
    const parsedArray = inputNumbers.split(',').map(Number);
    setVisualizerData((prevData) => ({
      array: [...parsedArray],
      searchElement: element,
      resultIndex:
        result && result.includes('Element found') ? parseInt(result.split(' ')[4], 10) : null,
    }));
  }, [inputNumbers, element, result]);

  const binarySearch = async () => {
    const parsedArray = inputNumbers.split(',').map(Number);
    let start = 0;
    let end = parsedArray.length - 1;

    const startTime = performance.now();

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (parsedArray[mid] === element) {
        const endTime = performance.now();
        const timeInMilliseconds = endTime - startTime;
        setExecutionTime(timeInMilliseconds);
        
        setResult(`Element found at index ${mid}`);
        return;
      } else if (parsedArray[mid] < element) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setVisualizerData({
        array: [...parsedArray],
        searchElement: element,
        resultIndex: mid,
      });
    }

    const endTime = performance.now();
    const timeInMilliseconds = endTime - startTime;
    setExecutionTime(timeInMilliseconds);

    setResult('Element not found!');
  };

  const handleSearch = () => {
    binarySearch();
  };

  return (
    <div>
        <h1>Binary Search</h1>
      <div>
        <label>
          <h3>Enter Numbers :</h3>
          <input
            type="text"
            value={inputNumbers}
            onChange={(e) => setInputNumbers(e.target.value)}
          />
        </label>
      </div>
      <div>
        <br></br>
        <label>Search Element: </label>
        <input
          type="number"
          value={element}
          onChange={(e) => setElement(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <p>{result}</p>
        <p>Execution Time: {executionTime} milliseconds</p>
      </div>
      <BinaryVisualizer {...visualizerData} />
    </div>
  );
};

export default BinaryComponent;
