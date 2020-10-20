import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RulerSquareIcon: FC<IconInterface> = function RulerSquareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RulerSquareIcon ${className}`;
      return (
        <Icon alt="RulerSquare" className={classNames} {...propsRest}>
          <path d="M3,5V21H9V19.5H7V18H9V16.5H5V15H9V13.5H7V12H9V10.5H5V9H9V5H10.5V9H12V7H13.5V9H15V5H16.5V9H18V7H19.5V9H21V3H5A2,2 0 0,0 3,5M6,7A1,1 0 0,1 5,6A1,1 0 0,1 6,5A1,1 0 0,1 7,6A1,1 0 0,1 6,7Z" />

        </Icon>
      );
    };
    RulerSquareIcon.displayName = 'RulerSquareIcon';
      