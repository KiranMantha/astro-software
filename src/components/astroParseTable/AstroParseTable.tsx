import { useRef, useState } from 'preact/hooks';
import { NAKSHATRA_ALIAS_MAP, NAKSHATRA_FULL_NAMES, NAVAMSA_COMBINATION, RASI_FULL_NAMES } from '../../data/constants';
import styles from './AstroParseTable.module.scss';
import { NakshatraPadaData } from '../../data/NakshatraPada.data';
import type { NakshatraData, NakshatraPadas } from '../../models';

type AstroRowData = {
  body: string;
  longitude: string;
  nakshatraCode: string;
  nakshatra: string;
  pada: string;
  rasi: string;
  rasiCode: string;
  navamsa: string;
  navamsaCode: string;
};

export function AstroParseTable() {
  const [input, setInput] = useState('');
  const [rows, setRows] = useState<AstroRowData[]>([]);
  const planetMatrixRef = useRef<Record<string, number>>({});
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);
  const [hoveredColIndex, setHoveredColIndex] = useState<number | null>(null);

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
    { name: 'Bhrigu Bindu' }
  ];

  const parseAstroText = (text: string) => {
    const parsedRows = text
      .trim()
      .split('\n')
      .filter(Boolean)
      .slice(1)
      .map((line) => {
        const parts = line.trim().split(/\s+/);

        const body = parts.slice(0, parts.length - 5).join(' ');
        const longitude = parts.slice(parts.length - 5, parts.length - 4).join(' ');
        let nakshatra = parts.slice(parts.length - 4, parts.length - 3).join(' ');
        const pada = parts.slice(parts.length - 3, parts.length - 2).join(' ');
        const rasi = parts.slice(parts.length - 2, parts.length - 1).join(' ');
        const navamsa = parts.slice(parts.length - 1).join(' ');

        nakshatra = NAKSHATRA_ALIAS_MAP[nakshatra] ?? nakshatra;

        return {
          body,
          longitude,
          nakshatraCode: nakshatra,
          nakshatra: NAKSHATRA_FULL_NAMES[nakshatra as keyof typeof NAKSHATRA_FULL_NAMES],
          pada,
          rasi: RASI_FULL_NAMES[rasi as keyof typeof RASI_FULL_NAMES],
          rasiCode: rasi,
          navamsa: RASI_FULL_NAMES[navamsa as keyof typeof RASI_FULL_NAMES],
          navamsaCode: navamsa
        };
      });
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

    return parsedRows;
  };

  const handleSubmit = () => {
    setRows(parseAstroText(input));
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

      <div className={styles.actions}>
        <button onClick={handleSubmit}>Generate Table</button>
      </div>

      {rows.length > 0 ? (
        <>
          <details>
            <summary>Navamsa Table</summary>
            <div>
              <table>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <details>
            <summary>Navamsa Matrx</summary>
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

                        return (
                          <td
                            style={{
                              cursor: 'pointer',
                              ...getCellStyle(rowIndex, colIndex)
                            }}
                            onMouseEnter={() => handleCellHover(rowIndex, colIndex)}
                            onMouseLeave={handleMouseLeave}
                          >
                            {difference < 0 ? difference + 108 : difference}
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
    </div>
  );
}
