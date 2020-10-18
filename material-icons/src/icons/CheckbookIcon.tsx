import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckbookIcon: FC<IconInterface> = function CheckbookIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckbookIcon ${className}`;
      return (
        <Icon alt="Checkbook" className={classNames} {...propsRest}>
          <path d="M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z" />

        </Icon>
      );
    };
    CheckbookIcon.displayName = 'CheckbookIcon';
      