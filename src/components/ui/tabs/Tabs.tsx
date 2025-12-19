import { useState } from "preact/hooks";
import styles from "./Tabs.module.scss";
import type { TabProps } from "./Tabs.model";

export const Tabs = ({ tabs, defaultTab }: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === tab.value ? styles.active : ""}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};
