import React from 'react'

export default function SidebarItem({ name, active, handleClick }) {
    return (
            <button 
                className={`btn btn-primary mb-4 ${active ? 'active' : ''}`}
                onClick= {handleClick} // setting active to this button using call back approach
            >
                {name}
            </button>
    )
}
