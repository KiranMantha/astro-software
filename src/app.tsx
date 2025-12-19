import { AstroParseTable, Tabs, NakshatraPada } from './components';
import { selectedView, Views } from './signals';
import { useLiveSignal } from '@preact/signals/utils';

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
    }
  ];

  console.log(view.value.value);

  return <Tabs key={view.value.value} tabs={tabs} defaultTab={view.value.value} />;
}
