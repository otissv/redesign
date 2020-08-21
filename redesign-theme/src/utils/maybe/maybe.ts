import { either } from '../either/either';

export function maybe(
  empty: undefined | null | '' | 0 | false | {} | [] = null
) {
  return <T>(value?: T) => either(value, empty)(value);
}

function maybeType(type: string) {
  return <V>(value: V | V[]) =>
    Array.isArray(value) ? value ?? null : typeof value === type ? value : null;
}

export function maybeString(value: string): string {
  return maybe('')(maybeType('string')(value));
}

export function maybeNumber(value: number): number {
  return maybe(0)(maybeType('number')(value));
}

export function maybeBoolean(value: string): boolean {
  return maybe(false)(maybeType('boolean')(value));
}

export function maybeArray<T>(value: T[]): T[] {
  return maybe([])(() => Array.isArray(value) && value);
}
