function fun(target, ...args) {
  target = { ...target };
  for (let i = 0; i < args.length; i++) {
    Object.assign(target, args[i]);
  }
  return target;
}

console.log(fun({ a: 1 }, { b: 2 }, 8));
