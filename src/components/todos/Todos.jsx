import React from 'react'
import { CrudRedux } from './CRUD-Redux'
import { Todo } from './Todo'
import { TodoCRUD } from './Todo-CRUD'
import { TodoRT } from './Todo-RT'

export const Todos = () => {
  return (
    <div>
        <Todo />
        <TodoRT />
        <TodoCRUD />
        <CrudRedux />
    </div>
  )
}
