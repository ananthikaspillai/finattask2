import React, { useState } from 'react';

const BinaryComponent= () => {
  const [arr, setArr] = useState([  4,   9,  11,  20,  30,  39,  39,  44,  51,  68,  68,  77,  80,
         83,  96,  99, 101, 108, 120, 143, 143, 144, 146, 150, 151, 156,
        179, 183, 184, 191, 193, 218, 219, 222, 230, 249, 254, 258, 264,
        271, 292, 296, 317, 329, 332, 333, 336, 339, 354, 357, 368, 373,
        374, 379, 386, 389, 417, 417, 418, 419, 423, 432, 434, 438, 442,
        451, 452, 457, 468, 474, 476, 479, 480, 489, 496, 497, 510, 517,
        519, 523, 531, 532, 533, 533, 536, 539, 541, 549, 559, 561, 573,
        575, 581, 587, 593, 617, 618, 620, 643, 643, 645, 648, 676, 682,
        686, 689, 691, 700, 707, 717, 722, 729, 734, 735, 743, 764, 772,
        773, 780, 781, 781, 798, 804, 810, 819, 819, 830, 835, 837, 840,
        851, 855, 865, 867, 890, 896, 909, 916, 922, 937, 947, 948, 950,
        953, 958, 959, 963, 983, 995, 998]);
  const [element, setElement] = useState('');
  const [result, setResult] = useState(null);

  const Function = () => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === element) {
        setResult(`Element found at index ${mid}`);
        return;
      } else if (arr[mid] < element) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    setResult('Element not found!');
  };

  const handleSearch = () => {
    Function();
  };

  return (
    <div>
      <div>
        <label>Array: </label>
        <span>{arr.join(', ')}</span>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default BinaryComponent;