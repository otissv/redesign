import { ThemeComponentInterface } from '@redesign/theme';

export interface PaginationInterface extends ThemeComponentInterface {
  currentPage: number;
  pageSize?: number[];
  size: number;
  total: number;
  onNext: any;
  onPrevious: any;
  onToStart: any;
  onToEnd: any;
  onPageClick: any;
}
