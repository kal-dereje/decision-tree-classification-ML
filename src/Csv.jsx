import React, { useState } from 'react';

function CSVReader() {
  const [csvData, setCSVData] = useState(null);

  const handleFileUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = event => {
      const contents = event.target.result;
      
      setCSVData(contents);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {console.log(csvData)}
      {csvData && <pre>{csvData}</pre>}
    </div>
  );
}

export default CSVReader;
