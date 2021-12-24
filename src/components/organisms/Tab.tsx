import * as React from 'react'

type TabProps<T extends string, V extends Record<string, unknown>> = {
  tabs: [T, ...T[]]
  items: {
    [key in T]: V[]
  }
  children: (item: V, idx: number) => JSX.Element
}

export const Tab = <T extends string, V extends Record<string, unknown>>({
  tabs,
  items,
  children,
}: TabProps<T, V>): JSX.Element => {
  const [selectedTab, setSelectedTab] = React.useState<T>(tabs[0])

  return (
    <>
      <div className="flex flex-row">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-grow-0 px-8 py-2 text-lg border rounded-t focus:outline-none hover:bg-accent ${
              tab === selectedTab ? 'border-b-0' : ''
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="flex-grow border-b" />
      </div>
      <div className="border border-t-0 rounded-b" style={{ minHeight: 100 }}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`divide-y-2 ${tab !== selectedTab ? 'hidden' : ''}`}
          >
            {items[tab].map((item, i) => children(item, i))}
          </div>
        ))}
      </div>
    </>
  )
}
