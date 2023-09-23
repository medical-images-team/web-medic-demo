import React from 'react';

function PatientTable() {
  // サンプルデータ
  const patientData = [
    { id: 1, temperature: 37.5, condition: 'Good', otherInfo: 'N/A' },
    { id: 2, temperature: 38.2, condition: 'Fair', otherInfo: 'Cough' },
    { id: 3, temperature: 36.8, condition: 'Excellent', otherInfo: 'N/A' },
    { id: 4, temperature: 37.0, condition: 'Good', otherInfo: 'N/A' },
    // 以下、必要な数の患者データを追加
  ];

  return (
    <div>
      <h2>Patient Medical Information</h2>
      <div 
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th>体温</th>
                <th>体調</th>
                <th>その他情報</th>
            </tr>
            </thead>
            <tbody>
            {patientData.map((patient, index) => (
                <tr key={index}>
                <td>{patient.id}</td>
                <td>{patient.temperature}°C</td>
                <td>{patient.condition}</td>
                <td>{patient.otherInfo}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientTable;
