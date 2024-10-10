import React from 'react'

interface InputProps {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    max?: number
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type = 'text', max = null }) => (
    <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            max={max}
            style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
            }}
        />
    </div>
)

export default Input