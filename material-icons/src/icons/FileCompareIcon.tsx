import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileCompareIcon: FC<IconInterface> = function FileCompareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileCompareIcon ${className}`;
      return (
        <Icon alt="FileCompare" className={classNames} {...propsRest}>
          <path d="M10,18H6V16H10V18M10,14H6V12H10V14M10,1V2H6C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V23H12V1H10M20,8V20C20,21.11 19.11,22 18,22H14V20H18V11H14V9H18.5L14,4.5V2L20,8M16,14H14V12H16V14M16,18H14V16H16V18Z" />

        </Icon>
      );
    };
    FileCompareIcon.displayName = 'FileCompareIcon';
      