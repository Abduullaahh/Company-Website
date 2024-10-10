import React, { useState } from 'react'
import Button from '@/components/admin/button'

interface TabProps {
    children: React.ReactNode
    label: string
}

const Tab: React.FC<TabProps> = ({ children }) => <div>{children}</div>

interface TabsProps {
    children: React.ReactElement<TabProps>[]
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div>
            <div style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0' }}>
                {React.Children.map(children, (child, index) => (
                    <Button
                        onClick={() => setActiveTab(index)}
                        style={{
                            marginRight: '10px',
                            backgroundColor: activeTab === index ? '#014783' : 'transparent',
                            color: activeTab === index ? 'white' : '#333',
                            // border: 'none',
                            borderBottom: activeTab === index ? '2px solid #0070f3' : 'none',
                            // borderRadius: '0',
                            padding: '10px 15px'
                        }}
                    >
                        {child.props.label}
                    </Button>
                ))}
            </div>
            {React.Children.toArray(children)[activeTab]}
        </div>
    )
}

export { Tabs, Tab }