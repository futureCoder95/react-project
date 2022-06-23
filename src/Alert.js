import React from 'react'

function Alert(props) {
    return (
        <div style={{height:"48px"}}>
           { props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <b>{props.alert.type} </b> {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert;