import type { ComponentChildren } from 'preact';

export type TabProps = {
  tabs: TabItem[];
};

type TabItem = {
  title: string;
  content: ComponentChildren;
};
