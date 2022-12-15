export default function(
  target: Record<string, unknown>,
  ...args: Array<Record<string, unknown>>
): Record<string, unknown> {
  target = { ...target }
  for (let i = 0; i < args.length; i++) {
    Object.assign(target, args[i])
  }
  return target
}
