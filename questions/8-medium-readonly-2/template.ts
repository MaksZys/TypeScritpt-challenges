// type MyReadonly2<T, K extends keyof T = keyof {}> = [K] extends [never]
//   ? Readonly<T>
//   : Readonly<Pick<T, K>> & Omit<T, K>;

// OR EVEN BETTER

type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [Key in K]: T[Key];
}
