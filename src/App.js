import { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const calculate = (operator) => {
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div className="app">
      <h1>GitHub Pages 部署測試</h1>
      <p>這是一個簡單的計算器，用於測試部署到 GitHub Pages</p>
      
      <div className="calculator">
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(Number(e.target.value))} 
        />
        
        <div className="buttons">
          <button onClick={() => calculate('+')}>+</button>
          <button onClick={() => calculate('-')}>-</button>
          <button onClick={() => calculate('*')}>×</button>
          <button onClick={() => calculate('/')}>÷</button>
        </div>
        
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(Number(e.target.value))} 
        />
        
        <div className="result">結果: {result}</div>
      </div>
      
      <div className="deploy-instructions">
        <h2>部署步驟</h2>
        <ol>
          <li>將此專案推送到 GitHub 倉庫</li>
          <li>執行 <code>npm run deploy</code></li>
          <li>訪問 https://[你的用戶名].github.io/[倉庫名]</li>
        </ol>
      </div>
    </div>
  );
}