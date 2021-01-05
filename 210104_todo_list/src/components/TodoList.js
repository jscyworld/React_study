import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 38px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="create project" done={true} />
            <TodoItem text="eat pizza" done={true} />
            <TodoItem text="drink ballentine" done={false} />
            <TodoItem text="sleep" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;
