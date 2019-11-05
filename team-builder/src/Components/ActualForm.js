import React from "react";

const ActualForm = props => {
    return (
        <div className="form-list">
            {props.members.map(member => (
            <div className="form" key={member.name}>
            <h2>{member.name}</h2>                
            <h3>{member.email}</h3>
            <p>{member.role}</p>
        </div>)
            )}
        </div>
    );
};

export default ActualForm;