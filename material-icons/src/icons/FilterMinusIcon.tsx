import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FilterMinusIcon: FC<IconInterface> = function FilterMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FilterMinusIcon ${className}`;
      return (
        <Icon alt="FilterMinus" className={classNames} {...propsRest}>
          <path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.86V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3V3H17V3C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M15 17H23V19H15V17Z" />

        </Icon>
      );
    };
    FilterMinusIcon.displayName = 'FilterMinusIcon';
      