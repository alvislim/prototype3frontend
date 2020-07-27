import React from 'react'

function Message(props) {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <p>{props.msg}</p>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Message