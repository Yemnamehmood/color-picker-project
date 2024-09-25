'use client'
import { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState<string>('#3498db'); // Default color
  
  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    alert('Color copied to clipboard: ' + color);
  };

  return (
    <div className="container">
      <header>
        <h1>Color Picker Tool</h1>
      </header>

      <main>
        <div className="color-box" style={{ backgroundColor: color }}></div>

        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          className="color-input"
        />

        <div className="color-info">
          <p><strong>HEX:</strong> {color}</p>
          <p><strong>RGB:</strong> {hexToRgb(color)}</p>
        </div>

        <button onClick={handleCopy} className="copy-btn">Copy Color to Clipboard</button>
      </main>
      <br/>

      <footer>
        <p>&copy; 2024 All rights reserved - Color Picker by Yemna Mehmood</p>
      </footer>
    </div>
  );
}

// Function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};
