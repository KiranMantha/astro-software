import { useRef, useState } from 'preact/hooks';
import { NAVAMSA_COMBINATION } from '../../data/constants';
import { KarmicDoshas } from '../../data/KarmicDoshas';
import { NakshatraPadaData } from '../../data/NakshatraPada.data';
import { parseAstroText } from '../../helpers';
import type { NakshatraData, NakshatraPadas } from '../../models';
import type { AstroRowData } from './AstroParseTable.model';
import styles from './AstroParseTable.module.scss';

const planets = [
  { name: 'As' },
  { name: 'Sun' },
  { name: 'Moon' },
  { name: 'Mars' },
  { name: 'Mercury' },
  { name: 'Jupiter' },
  { name: 'Venus' },
  { name: 'Saturn' },
  { name: 'Rahu' },
  { name: 'Ketu' },
  { name: 'Uranus' },
  { name: 'Neptune' },
  { name: 'Pluto' },
  { name: 'Maandi' },
  { name: 'Bhrigu Bindu' }
];

export function AstroParseTable() {
  const [input, setInput] = useState('');
  const [rows, setRows] = useState<AstroRowData[]>([]);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);
  const [hoveredColIndex, setHoveredColIndex] = useState<number | null>(null);
  const [selectedPlanetDetails, setSelectedPlanetDetails] = useState<
    ((typeof KarmicDoshas)[string] & { rasi: string }) | null
  >(null);

  const planetMatrixRef = useRef<Record<string, number>>({});
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = () => {
    const parsedRows = parseAstroText(input);
    planetMatrixRef.current = {};
    parsedRows.forEach((item) => {
      let planetName = item.body.trim().split(' ')[0];
      if (planetName === 'Lagna') {
        planetName = 'As';
      }

      if (planetName === 'Bhrigu') {
        planetName = 'Bhrigu Bindu';
      }

      // Handle potential leading space or (R)
      if (planetName.includes('(R)')) {
        planetName = planetName.replace(' (R)', '');
      }
      // Normalize Cancer: Cn -> Ca
      let d1Code = item.rasiCode;
      if (d1Code === 'Cn') {
        d1Code = 'Ca';
      }
      let d9Code = item.navamsaCode;
      if (d9Code === 'Cn') {
        d9Code = 'Ca';
      }
      // Get navamsa number
      const navamsaNum = NAVAMSA_COMBINATION[`${d1Code},${d9Code}` as keyof typeof NAVAMSA_COMBINATION];
      if (navamsaNum) {
        planetMatrixRef.current[planetName] = navamsaNum;
      }
    });
    setRows(parsedRows);
  };

  const handleCellHover = (rowIndex: number, colIndex: number) => {
    setHoveredRowIndex(rowIndex);
    setHoveredColIndex(colIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
    setHoveredColIndex(null);
  };

  const getCellStyle = (rowIndex: number, colIndex: number) => {
    const isHoveredRow = hoveredRowIndex === rowIndex;
    const isHoveredCol = hoveredColIndex === colIndex;
    const isIntersection = isHoveredRow && isHoveredCol;

    if (isHoveredRow || isHoveredCol) {
      return {
        backgroundColor: isIntersection ? '#ffeb3b' : '#fff3cd' // Yellowish for highlight, darker for intersection
      };
    }
    return {};
  };

  const getRowStyle = (rowIndex: number) => {
    return hoveredRowIndex === rowIndex ? { backgroundColor: '#fff3cd' } : {};
  };

  const getColStyle = (colIndex: number) => {
    return hoveredColIndex === colIndex ? { backgroundColor: '#fff3cd' } : {};
  };

  const handleViewKarmicDosha = (nakshatraCode: string, rasi: string) => {
    setSelectedPlanetDetails({ ...KarmicDoshas[nakshatraCode], rasi });
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <textarea
        rows={15}
        cols={120}
        placeholder="Paste astrology data here..."
        value={input}
        onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        className={styles.formControl}
      />

      <div className={`text-center ${styles.actions}`}>
        <button onClick={handleSubmit}>Generate Table</button>
      </div>

      {rows.length > 0 ? (
        <>
          <details>
            <summary>
              <strong>Planet Details</strong>
            </summary>
            <div>
              <table className={styles.planetDetails}>
                <thead>
                  <tr>
                    <th>Body</th>
                    <th>Longitude</th>
                    <th>Nakshatra</th>
                    <th>Pada</th>
                    <th>Rasi (D1)</th>
                    <th>Navamsa (D9)</th>
                    <th>Charecterstics</th>
                    <th>Career Path</th>
                    <th>Has Karmic Dosha</th>
                    <th>Karmic Planet</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.body}</td>
                      <td>{row.longitude}</td>
                      <td data-nakshatra={`${row.nakshatraCode},${row.pada}`}>{row.nakshatra}</td>
                      <td>{row.pada}</td>
                      <td>{row.rasi}</td>
                      <td>{row.navamsa}</td>
                      <td>
                        {
                          NakshatraPadaData[row.nakshatraCode as keyof NakshatraData][row.pada as keyof NakshatraPadas][
                            'Characteristics'
                          ]
                        }
                      </td>
                      <td>
                        {
                          NakshatraPadaData[row.nakshatraCode as keyof NakshatraData][row.pada as keyof NakshatraPadas][
                            'Career Path'
                          ]
                        }
                      </td>
                      <td>
                        {row.hasKarmicDosha ? (
                          <>
                            <span>Yes</span>
                            <button data-size="sm" onClick={() => handleViewKarmicDosha(row.nakshatraCode, row.rasi)}>
                              View
                            </button>
                          </>
                        ) : (
                          'No'
                        )}
                      </td>
                      <td>{row.karmicPlanet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <details>
            <summary>
              <strong>Navamsa Matrix</strong>
            </summary>
            <div>
              <table className={styles.matrixTable}>
                <thead>
                  <tr>
                    <th></th>
                    {planets.map((planet, index) => (
                      <th key={index} style={{ ...getColStyle(index) }}>
                        {planet.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {planets.map((rowPlanet, rowIndex) => (
                    <tr key={rowIndex} style={getRowStyle(rowIndex)}>
                      <td style={{ ...getColStyle(-1) }}>{rowPlanet.name}</td>
                      {planets.map((colPlanet, colIndex) => {
                        const rowPlanetNumber = planetMatrixRef.current[rowPlanet.name];
                        const columnPlanetNumber = planetMatrixRef.current[colPlanet.name];
                        const difference = columnPlanetNumber - rowPlanetNumber;
                        const isSamplePlanet = rowPlanet.name === colPlanet.name;

                        return (
                          <td
                            style={{
                              cursor: 'pointer',
                              ...getCellStyle(rowIndex, colIndex)
                            }}
                            onMouseEnter={() => handleCellHover(rowIndex, colIndex)}
                            onMouseLeave={handleMouseLeave}
                          >
                            {isSamplePlanet ? 'X' : (difference < 0 ? difference + 108 : difference) + 1}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </>
      ) : null}

      <dialog ref={dialogRef} className={styles.karmicDoshaDialog}>
        <table>
          <tbody>
            <tr>
              <td>Rasi, Nakshatra</td>
              <td>
                {selectedPlanetDetails?.rasi}, {selectedPlanetDetails?.nakshatra}
              </td>
            </tr>
            <tr>
              <td>Indications</td>
              <td>{selectedPlanetDetails?.indications}</td>
            </tr>
            <tr>
              <td>Remidies</td>
              <td>{selectedPlanetDetails?.remidies}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={() => dialogRef.current?.close()}>Close</button>
        </div>
      </dialog>
    </div>
  );
}
