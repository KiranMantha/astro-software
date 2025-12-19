import { useState } from 'preact/hooks';
import styles from './Tabs.module.scss';
import type { TabProps } from './Tabs.model';

export const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? styles.active : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab]?.content}</div>
    </div>
  );
};
