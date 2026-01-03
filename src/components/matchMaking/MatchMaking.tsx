import { useState } from 'preact/hooks';
import { ASTA_KOOTAMI } from '../../data/constants';
import { getMaitriByNakshatraAndPada, getMatchScores, parseAstroText, print } from '../../helpers';
import styles from './MatchMaking.module.scss';

export const MatchMaking = () => {
  const [brideData, setBrideData] = useState('');
  const [groomData, setGroomData] = useState('');
  const [scores, setScores] = useState<
    Array<{ bride: string; groom: string; score: number; scoreWithExceptions: number; remarks?: string }>
  >([]);

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
        <>
          <div className="hide">
            <button onClick={() => print('match-container')}>Print</button>
          </div>
          <div id="match-container">
            <table className={styles.astaKootamiScoreTable}>
              <caption>Asta Kootami Score</caption>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Subject</th>
                  <th>Bride</th>
                  <th>Groom</th>
                  <th>Max Score</th>
                  <th>Score</th>
                  <th>Score With Exception</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {ASTA_KOOTAMI.map((header, index) => {
                  return (
                    <tr>
                      <td>{header.name}</td>
                      <td>{header.subject}</td>
                      <td>{scores[index].bride}</td>
                      <td>{scores[index].groom}</td>
                      <td>{header.maxScore}</td>
                      <td>{scores[index].score}</td>
                      <td>{scores[index].scoreWithExceptions}</td>
                      <td>{scores[index].remarks}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan={4}>Total Score</td>
                  <td>{ASTA_KOOTAMI.reduce((sum, item) => sum + item.maxScore, 0)}</td>
                  <td>{scores.reduce((sum, item) => sum + (item.score || 0), 0)}</td>
                  <td colspan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
};
