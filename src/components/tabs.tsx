// tabs.tsx

import { Tabs } from "@ui/tabs-ui";

export function TabsDemo() {
  const tabs = [
    {
      title: "All",
      value: "all",
      label: "All Projects",
      content: (
        <div>
          <p>All Projects Content</p>
        </div>
      ),
    },
    {
      title: "Web",
      value: "web",
      label: "Web Projects",
      content: (
        <div>
          <p>Web Projects Content</p>
        </div>
      ),
    },
    {
      title: "App",
      value: "app",
      label: "App Projects",
      content: (
        <div>
          <p>App Projects Content</p>
        </div>
      ),
    },
    {
      title: "AI & ML",
      value: "ai_ml",
      label: "AI & ML Projects",
      content: (
        <div>
          <p>AI & ML Projects Content</p>
        </div>
      ),
    },
  ];

  return <Tabs contentClassName="text-textPrimary" tabClassName="cursor-pointer font-Gist" tabs={tabs} />;
}

export default TabsDemo;
