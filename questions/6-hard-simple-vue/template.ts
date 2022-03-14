type ComputedValues<T> = {
  [Key in keyof T]: T[Key] extends (...args: unknown[]) => infer R ? R : never;
}

declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D,
  computed: C & ThisType<D>,
  methods: M & ThisType<D & M & ComputedValues<C>>,
}): any
