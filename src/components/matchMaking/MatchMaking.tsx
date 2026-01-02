import { useState } from 'preact/hooks';
import { parseAstroText } from '../../helpers';
import styles from './MatchMaking.module.scss';

export const MatchMaking = () => {
  const [groomData, setGroomData] = useState('');
  const [brideData, setBrideData] = useState('');

  const handleSubmit = () => {
    const parsedGroomData = parseAstroText(groomData);
    const parsedBrideData = parseAstroText(brideData);

    console.log(parsedGroomData, parsedBrideData);
  };

  return (
    <div>
      <div className={styles.coupleHora}>
        <div>
          <textarea
            rows={15}
            cols={120}
            placeholder="Paste Groom data here..."
            value={groomData}
            onInput={(e) => setGroomData((e.target as HTMLInputElement).value)}
          />
        </div>
        <div>
          <textarea
            rows={15}
            cols={120}
            placeholder="Paste Bride data here..."
            value={brideData}
            onInput={(e) => setBrideData((e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleSubmit}>Explore Match</button>
      </div>
    </div>
  );
};
