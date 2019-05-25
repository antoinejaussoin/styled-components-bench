import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useLayoutEffect
} from 'react';
import { generateMatrix } from './utils';
import './App.css';
import SC from './benchs/SC';
import SCWithStyles from './benchs/SCWithStyles';
import CSSModules from './benchs/CSSModules';
import Emotion from './benchs/Emotion';
import EmotionWithStyles from './benchs/EmotionWithStyles';
import PureStyles from './benchs/PureStyles';

const wait = async (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

const lr = '\r\n';

const App: React.FC = () => {
  const [tab, setTab] = useState<
    | 'SC'
    | 'SCWithStyles'
    | 'CSSModules'
    | 'Emotion'
    | 'EmotionWithStyles'
    | 'PureStyles'
  >('SC');
  const [size, setSize] = useState(20);
  const [counter, setCounter] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);
  const [log, setLog] = useState('');
  const matrix = useMemo(() => generateMatrix(size), [size, counter]);
  const increaseSize = useCallback(() => setSize(size => size + 10), []);
  const decreaseSize = useCallback(
    () => setSize(size => Math.max(size - 10, 10)),
    []
  );
  const measurePerf = useCallback(() => {
    const go = async () => {
      const start = Date.now();
      setCounter(c => c + 1);
      await wait(10);
      const end = Date.now();
      setDuration(end - start - 10);
      setLog(
        log => log + `${tab},${size},${size * size},${end - start - 10}${lr}`
      );
    };
    go();
  }, [size, tab]);

  useEffect(() => {
    console.log('Start');
  }, [size]);

  useLayoutEffect(() => {
    console.log('end');
  }, [size]);

  console.log('render');
  return (
    <div className="App">
      <button onClick={() => setTab('SC')}>SC</button>
      <button onClick={() => setTab('SCWithStyles')}>SC With Styles</button>
      <button onClick={() => setTab('CSSModules')}>CSS Modules + SCSS</button>
      <button onClick={() => setTab('Emotion')}>Emotion</button>
      <button onClick={() => setTab('EmotionWithStyles')}>
        Emotion With Styles
      </button>
      <button onClick={() => setTab('PureStyles')}>Inline styles only</button>
      <div>Current: {tab}</div>
      <button onClick={increaseSize}>Increase</button>
      <button onClick={decreaseSize}>Decrease</button>
      <button onClick={measurePerf}>Perf</button>
      {duration && (
        <div>
          Size: {size * size} / Duration: {duration} / Per 1ms:{' '}
          {(size * size) / duration}
        </div>
      )}
      {tab === 'SC' && <SC matrix={matrix} />}
      {tab === 'SCWithStyles' && <SCWithStyles matrix={matrix} />}
      {tab === 'CSSModules' && <CSSModules matrix={matrix} />}
      {tab === 'Emotion' && <Emotion matrix={matrix} />}
      {tab === 'EmotionWithStyles' && <EmotionWithStyles matrix={matrix} />}
      {tab === 'PureStyles' && <PureStyles matrix={matrix} />}
      <pre>{log}</pre>
    </div>
  );
};

export default App;
