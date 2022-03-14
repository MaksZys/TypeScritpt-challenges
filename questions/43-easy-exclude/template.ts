type MyExclude<T, U extends T> = T extends U ? never : T;

type Test = MyExclude<"test2" | "test" | "test3", "test2">;
