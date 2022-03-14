type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Test = {
  okon: 1,
  test: string,
  test2: number;
}

type final = MyOmit<Test, 'test' | 'test2'>;
