import React from 'react'

interface CardProps {
    children: React.ReactNode
    title?: string
    description?: string
}

const Card: React.FC<CardProps> = ({ children, title, description }) => (
    <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
        {title && <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{title}</h2>}
        {description && <p style={{ color: '#666', marginBottom: '15px' }}>{description}</p>}
        {children}
    </div>
)

export default Card