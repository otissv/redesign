import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileClockIcon: FC<IconInterface> = function FileClockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileClockIcon ${className}`;
      return (
        <Icon alt="FileClock" className={classNames} {...propsRest}>
          <path d="M4 2C2.89 2 2 2.89 2 4V20A2 2 0 0 0 4 22H12.41A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 18 9.3V8L12 2H4M11 3.5L16.5 9H11V3.5M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12V17L18.61 19.16L19.36 17.94L16.5 16.25V12H15Z" />

        </Icon>
      );
    };
    FileClockIcon.displayName = 'FileClockIcon';
      