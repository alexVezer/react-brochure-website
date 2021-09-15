import React from 'react'

const Box = ({content, cls}) => {
    return (
        <div className={`box ${cls}`}>
            {content}
        </div>
    )
}

export default Box
