import React, { useState } from 'react';
import './App.css';
import SC from './SC';
import SCAndStyles from './SCAndStyles';
import CSSModules from './CSSModules';

const App: React.FC = () => {
  const [tab, setTab] = useState<'SC' | 'SCWithStyles' | 'CSSModules'>('SC');
  return (
    <div className="App">
      <button onClick={() => setTab('SC')}>SC</button>
      <button onClick={() => setTab('SCWithStyles')}>SC With Styles</button>
      <button onClick={() => setTab('CSSModules')}>CSS Modules + SCSS</button>
      <div>Current: {tab}</div>
      {tab === 'SC' && <SC />}
      {tab === 'SCWithStyles' && <SCAndStyles />}
      {tab === 'CSSModules' && <CSSModules />}
    </div>
  );
};

export default App;
