import { Equal } from '@type-challenges/utils';

type GetReadonlyKeys<T> = any;

// type GetReadonlyKeys<T> = {
//   [Key in keyof T]: Equal<Readonly<T[Key]>, T[Key]> ? T[Key] : never
// };

interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
