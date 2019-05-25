import React, { useState, useMemo, useCallback } from 'react';
import { generateMatrix } from './utils';
import './App.css';
import SC from './SC';
import SCAndStyles from './SCAndStyles';
import CSSModules from './CSSModules';

const App: React.FC = () => {
  const [tab, setTab] = useState<'SC' | 'SCWithStyles' | 'CSSModules'>('SC');
  const [size, setSize] = useState(20);
  const matrix = useMemo(() => generateMatrix(size), [size]);
  const increaseSize = useCallback(() => setSize(size => size + 10), []);
  const decreaseSize = useCallback(
    () => setSize(size => Math.max(size - 10, 10)),
    []
  );
  return (
    <div className="App">
      <button onClick={() => setTab('SC')}>SC</button>
      <button onClick={() => setTab('SCWithStyles')}>SC With Styles</button>
      <button onClick={() => setTab('CSSModules')}>CSS Modules + SCSS</button>
      <div>Current: {tab}</div>
      <button onClick={increaseSize}>Increase</button>
      <button onClick={decreaseSize}>Decrease</button>
      {tab === 'SC' && <SC matrix={matrix} />}
      {tab === 'SCWithStyles' && <SCAndStyles matrix={matrix} />}
      {tab === 'CSSModules' && <CSSModules matrix={matrix} />}
    </div>
  );
};

export default App;
