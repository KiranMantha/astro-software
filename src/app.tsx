import { AstroParseTable, Tabs, NakshatraPada } from './components';

export function App() {
  const tabs = [
    { title: 'Astro Table', content: <AstroParseTable /> },
    { title: 'Nakshatra Pada', content: <NakshatraPada /> },
    { title: 'Contact', content: <div>Contact details here.</div> },
  ];

  return <Tabs tabs={tabs} />;
}
