import {
  NoopStringType,
  NoopVoidType,
  NoopType,
  NoopObjectType,
} from './noop.types';

export const noop: NoopType = <T>(_args?: T) => _args;
export const noopObject: NoopObjectType = (_args?: any) => ({});
export const noopString: NoopStringType = (_args?: any) => '';
export const noopVoid: NoopVoidType = (_args?: any) => {};
