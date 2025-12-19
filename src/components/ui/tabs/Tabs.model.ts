import type { ComponentChildren } from "preact";

export type TabProps = {
  tabs: TabItem[];
  defaultTab: string;
};

type TabItem = {
  title: string;
  value: string;
  content: ComponentChildren;
};
