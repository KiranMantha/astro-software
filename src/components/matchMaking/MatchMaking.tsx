import { useState } from 'preact/hooks';
import { MAX_MATCHING_SCORES } from '../../data/constants';
import { getMaitriByNakshatraAndPada, getMatchScores, parseAstroText } from '../../helpers';
import styles from './MatchMaking.module.scss';

export const MatchMaking = () => {
  const [brideData, setBrideData] = useState('');
  const [groomData, setGroomData] = useState('');
  const [scores, setScores] = useState<Array<{ bride: string; groom: string; score: number }>>([]);

  const handleSubmit = () => {
    const parsedBrideData = parseAstroText(brideData);
    const parsedGroomData = parseAstroText(groomData);

    const brideMaitri = getMaitriByNakshatraAndPada(parsedBrideData[2].nakshatraCode, parsedBrideData[2].pada);
    const groomMaitri = getMaitriByNakshatraAndPada(parsedGroomData[2].nakshatraCode, parsedGroomData[2].pada);

    if (brideMaitri && groomMaitri) {
      const scores = getMatchScores(brideMaitri, groomMaitri);
      console.log(scores);
      setScores(scores);
    }
  };

  return (
    <div>
      <div className={styles.coupleHora}>
        <div>
          <textarea
            rows={15}
            cols={120}
            placeholder="Paste Bride data here..."
            value={brideData}
            onInput={(e) => setBrideData((e.target as HTMLInputElement).value)}
          />
        </div>
        <div>
          <textarea
            rows={15}
            cols={120}
            placeholder="Paste Groom data here..."
            value={groomData}
            onInput={(e) => setGroomData((e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleSubmit}>Explore Match</button>
      </div>
      {scores.length ? (
        <table className={styles.matchScoreTable}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Bride</th>
              <th>Groom</th>
              <th>Max Score</th>
              <th>Score</th>
              <th>Score With Exception</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {MAX_MATCHING_SCORES.map((header, index) => {
              return (
                <tr>
                  <td>{header.name}</td>
                  <td>{scores[index].bride}</td>
                  <td>{scores[index].groom}</td>
                  <td>{header.maxScore}</td>
                  <td>{scores[index].score}</td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colspan={3} style="text-align: right;">
                Total Score
              </td>
              <td>{MAX_MATCHING_SCORES.reduce((sum, item) => sum + item.maxScore, 0)}</td>
              <td>{scores.reduce((sum, item) => sum + (item.score || 0), 0)}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      ) : null}
    </div>
  );
};
