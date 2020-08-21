export const ELEVATE_0 = 'none';
export const ELEVATE_1 =
  'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;';
export const ELEVATE_2 =
  'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;';
export const ELEVATE_3 =
  'rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;';
export const ELEVATE_4 =
  'rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;';
export const ELEVATE_5 =
  'rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px;';

export type ElevationTypes =
  | typeof ELEVATE_0
  | typeof ELEVATE_1
  | typeof ELEVATE_2
  | typeof ELEVATE_3
  | typeof ELEVATE_4
  | typeof ELEVATE_5;

export interface ElevateInterface {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}

export interface PartialElevateInterface extends Partial<ElevateInterface> {}
