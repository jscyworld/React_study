import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 32px 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0px;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #20c997;
        font-size: 18px;
        font-weight: bold;
        margin-top: 40px;
    }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2021 / 01 / 04</h1>
            <div className="day">Sunday</div>
            <div className="tasks-left">2 tasks left.</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
