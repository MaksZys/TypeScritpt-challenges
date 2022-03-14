type MyPick<T, K extends keyof T> = { [Key in K]: T[Key] }

type MyPickTest = {
  okon: 1,
  test: string;
  test2: number;
  test3: boolean;
};

type Result = MyPick<MyPickTest, "test" | "test2">;
