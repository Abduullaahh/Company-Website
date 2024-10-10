import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    style?: React.CSSProperties
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style = {}, type = 'button' }) => (
    <button
        type={type}
        onClick={onClick}
        style={{
            padding: '10px 15px',
            backgroundColor: '#014783',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            ...style
        }}
    >
        {children}
    </button>
)

export default Button