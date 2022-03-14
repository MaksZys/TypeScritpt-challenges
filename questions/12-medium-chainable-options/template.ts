type Chainable<T> = {
  option(key: string, value: T): this[key]: ;
  get(): any
}
