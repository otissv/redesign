import { ThemeComponentInterface } from '@redesign/theme';

type ISODateType = string;

export interface FormatDateTimeInterface extends ThemeComponentInterface {
  date: ISODateType;
  format?: string;
  options?: {
    locale?: globalThis.Locale | undefined;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    firstWeekContainsDate?: number | undefined;
    useAdditionalWeekYearTokens?: boolean | undefined;
    useAdditionalDayOfYearTokens?: boolean | undefined;
  };
}
