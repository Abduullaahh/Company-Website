import React from 'react'

interface TextareaProps {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    maxWords?: number
}

const Textarea: React.FC<TextareaProps> = ({ label, value, onChange, maxWords = null }) => (
    <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}</label>
        <textarea
            value={value}
            onChange={(e) => {
                if (maxWords) {
                    const words = e.target.value.trim().split(/\s+/)
                    if (words.length <= maxWords) {
                        onChange(e)
                    }
                } else {
                    onChange(e)
                }
            }}
            style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                minHeight: '100px'
            }}
        />
        {maxWords && (
            <div style={{ fontSize: '12px', color: '#666' }}>
                {value.trim().split(/\s+/).length}/{maxWords} words
            </div>
        )}
    </div>
)

export default Textarea