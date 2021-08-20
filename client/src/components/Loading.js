import React from 'react'

function Loading() {
    return (
        <div>
            <div className="spinner-border text-info" style={{height:'100px', width: '100px'} } role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
