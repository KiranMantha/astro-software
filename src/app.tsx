import { useLiveSignal } from '@preact/signals/utils';
import { AstroParseTable, MatchMaking, NakshatraPada, Tabs } from './components';
import { selectedView, Views } from './signals';

export function App() {
  const view = useLiveSignal(selectedView);
  const tabs = [
    {
      title: 'Astro Table',
      value: Views.ASTRO_TABLE,
      content: <AstroParseTable />
    },
    {
      title: 'Nakshatra Pada',
      value: Views.NAKSHATRA_PADA,
      content: <NakshatraPada />
    },
    {
      title: 'Match Making',
      value: Views.MATCH_MAKING,
      content: <MatchMaking />
    }
  ];

  console.log(view.value.value);

  return <Tabs key={view.value.value} tabs={tabs} defaultTab={view.value.value} />;
}
