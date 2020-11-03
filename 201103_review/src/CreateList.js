import React from 'react';

const CreateList = ({name, nickname, onChange, createUser}) => {
    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder="type name"></input>
            <input name="nickname" onChange={onChange} value={nickname} placeholder="type nickname"></input>
            <div>
                <button onClick={createUser}>Add</button>
            </div>
        </div>
    );
};

export default React.memo(CreateList);