// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const DELETE_TODO = '[Todo] Delete Todo';

// action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

export class DeleteTodo {
  readonly type = DELETE_TODO;
  constructor(private payload: any) {}
}
