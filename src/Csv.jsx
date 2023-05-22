import React, { useState } from 'react';

function CSVReader() {
  const [csvData, setCSVData] = useState(null);

  const handleFileUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = event => {
      const contents = event.target.result;
      const rows = contents.split('\n');
    
      setCSVData(rows);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      
      {csvData && <pre>{csvData[1]}</pre>}
    </div>
  );
}

export default CSVReader;
