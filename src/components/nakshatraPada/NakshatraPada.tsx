import type { TargetedSubmitEvent } from 'preact';
import { NAKSHATRA_FULL_NAMES } from '../../data/constants';
import { Select } from '../ui';
import styles from './NakshatraPada.module.scss';
import { useState } from 'preact/hooks';
import { NakshatraPadaData } from '../../data/NakshatraPada.data';
import type { NakshatraData, NakshatraPadas, PadaInfo } from '../../models';

export const NakshatraPada = () => {
  const [selectedPadaInfo, setSelectedPadainfo] = useState<PadaInfo>();

  const handleSubmit = (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const selectedNakshatra = formData.get('nakshatra') as keyof NakshatraData;
    const selectedPada = formData.get('pada') as keyof NakshatraPadas;
    const data = NakshatraPadaData[selectedNakshatra][selectedPada];
    setSelectedPadainfo(data);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className={styles.nakshatraPadaForm} onSubmit={handleSubmit}>
        <Select
          fieldName="nakshatra"
          label="Select Nakshatra"
          options={[
            { label: 'Select', value: '' },
            ...Object.entries(NAKSHATRA_FULL_NAMES).map(([key, value]) => {
              return { label: value, value: key };
            }),
          ]}
        />
        <Select
          fieldName="pada"
          label="Select Pada"
          options={[
            {
              label: 'Select',
              value: '',
            },
            {
              label: 'Pada 1',
              value: '1',
            },
            {
              label: 'Pada 2',
              value: '2',
            },
            {
              label: 'Pada 3',
              value: '3',
            },
            {
              label: 'Pada 4',
              value: '4',
            },
          ]}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <pre>
          <code>{JSON.stringify(selectedPadaInfo, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};
