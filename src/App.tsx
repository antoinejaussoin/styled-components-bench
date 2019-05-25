import React, { useState, useMemo, useCallback } from 'react';
import { generateMatrix } from './utils';
import './App.css';
import SC from './benchs/SC';
import SCWithStyles from './benchs/SCWithStyles';
import CSSModules from './benchs/CSSModules';
import Emotion from './benchs/Emotion';
import EmotionWithStyles from './benchs/EmotionWithStyles';

const App: React.FC = () => {
  const [tab, setTab] = useState<
    'SC' | 'SCWithStyles' | 'CSSModules' | 'Emotion' | 'EmotionWithStyles'
  >('SC');
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
      <button onClick={() => setTab('Emotion')}>Emotion</button>
      <button onClick={() => setTab('EmotionWithStyles')}>
        Emotion With Styles
      </button>
      <div>Current: {tab}</div>
      <button onClick={increaseSize}>Increase</button>
      <button onClick={decreaseSize}>Decrease</button>
      {tab === 'SC' && <SC matrix={matrix} />}
      {tab === 'SCWithStyles' && <SCWithStyles matrix={matrix} />}
      {tab === 'CSSModules' && <CSSModules matrix={matrix} />}
      {tab === 'Emotion' && <Emotion matrix={matrix} />}
      {tab === 'EmotionWithStyles' && <EmotionWithStyles matrix={matrix} />}
    </div>
  );
};

export default App;
