import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableEyeOffIcon: FC<IconInterface> = function TableEyeOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableEyeOffIcon ${className}`;
      return (
        <Icon alt="TableEyeOff" className={classNames} {...propsRest}>
          <path d="M12 8.8L6.2 3H18C19.1 3 20 3.9 20 5V12.59C19.07 12.21 18.06 12 17 12C16.45 12 15.91 12.07 15.38 12.18L14.2 11H18V7H12V8.8M17.09 13.89L22.31 19.11C22.58 18.73 22.82 18.32 23 17.88C22.07 15.57 19.78 13.92 17.09 13.89M22.11 21.46L20.84 22.73L19.5 21.37C18.71 21.69 17.88 21.88 17 21.88C14.27 21.88 11.94 20.22 11 17.88C11.45 16.76 12.23 15.8 13.21 15.1L11.93 13.82C11.19 14.42 10.53 15.14 10 15.97V13H4V17H9.42C9.26 17.32 9.12 17.66 9 18C9.12 18.34 9.26 18.68 9.42 19H4C2.9 19 2 18.1 2 17V5C2 4.68 2.08 4.38 2.22 4.11L1.11 3L2.39 1.73L22.11 21.46M9.11 11L5.11 7H4V11H9.11M18.18 20.07L14.81 16.7C14.61 17.05 14.5 17.45 14.5 17.88C14.5 19.26 15.62 20.38 17 20.38C17.43 20.38 17.83 20.27 18.18 20.07Z" />

        </Icon>
      );
    };
    TableEyeOffIcon.displayName = 'TableEyeOffIcon';
      