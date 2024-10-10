import React from 'react'

interface BarChartProps {
    data: { label: string; value: number }[]
}

const BarChart: React.FC<BarChartProps> = ({ data }) => (
    <div style={{ display: 'flex', height: '200px', alignItems: 'flex-end', justifyContent: 'space-around' }}>
        {data.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                    style={{
                        width: '40px',
                        height: `${item.value * 2}px`,
                        backgroundColor: '#014783',
                        marginBottom: '5px'
                    }}
                />
                <span>{item.label}</span>
            </div>
        ))}
    </div>
)

export default BarChart