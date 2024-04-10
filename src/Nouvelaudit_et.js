import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function Nouvelaudit_et() {
    const [xlsxData, setXlsxData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            let newData = [];
            workbook.SheetNames.forEach(sheetName => {
                const worksheet = workbook.Sheets[sheetName];
                const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                newData.push({ sheetName, data: sheetData });
            });

            setXlsxData(newData);
        };
        reader.readAsArrayBuffer(file);
    };

    const handleChange = (e, sheetIndex, rowIndex, columnIndex) => {
        const newValue = e.target.value;
        const newData = [...xlsxData];
        newData[sheetIndex].data[rowIndex][columnIndex] = newValue;
        setXlsxData(newData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Envoyer xlsxData au backend pour enregistrement dans la base de données
    };

    return (
        <div style={{overflowX: 'auto', overflowY: 'auto', maxHeight: '500px'}}>
            <h2>Nouvel Audit</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".xlsx" onChange={handleFileUpload}/>
                {xlsxData.map((sheet, sheetIndex) => (
                    <div key={sheetIndex} style={{marginBottom: '20px'}}>
                        <h3>{sheet.sheetName}</h3>
                        <div style={{overflowX: 'auto'}}>
                            <table>
                                <tbody>
                                {sheet.data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, columnIndex) => (
                                            <td key={columnIndex}>
                                                <input
                                                    type="text"
                                                    value={cell}
                                                    onChange={(e) => handleChange(e, sheetIndex, rowIndex, columnIndex)}
                                                    style={{width: '100%', maxWidth: '200px', fontSize: '16px'}}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
                <button type="submit">Envoyer</button>
            </form>
        </div>


    );
}

export default Nouvelaudit_et;
