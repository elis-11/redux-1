import React from 'react'
import { CrudRedux } from './CRUD-Redux'
import { ReduxTol } from './reduxtol/ReduxTol'
import { Todo } from './Todo'
import { TodoCRUD } from './Todo-CRUD'
import { TodoRT } from './Todo-RT'

export const Todos = () => {
  return (
    <div>
        <ReduxTol />
        <TodoRT />
        <CrudRedux />
        <Todo />
        <TodoCRUD />
    </div>
  )
}
