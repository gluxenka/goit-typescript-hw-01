function merge<T extends {}, S extends {}>(objA: T, objB: S): T & S {
  return Object.assign<T, S>(objA, objB) as T & S;
}
