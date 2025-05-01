import { useState } from "react";

const tabs = [
  { id: "tab1", label: "Tab 1", content: "This is content for Tab 1" },
  { id: "tab2", label: "Tab 2", content: "This is content for Tab 2" },
  { id: "tab3", label: "Tab 3", content: "This is content for Tab 3" },
];

function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${
              activeTab === tab.id
                ? "text-blue-500 font-bold"
                : "text-black pointer"
            } cursor-pointer`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tab;
