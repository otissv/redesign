import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ScannerIcon: FC<IconInterface> = function ScannerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ScannerIcon ${className}`;
      return (
        <Icon alt="Scanner" className={classNames} {...propsRest}>
          <path d="M4.2,10.7L19.8,5L20.5,6.9L6.4,12H19A2,2 0 0,1 21,14V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V12.5C3,11.7 3.5,10.9 4.2,10.7M17,17H19V15H17V17M5,17H15V15H5V17Z" />

        </Icon>
      );
    };
    ScannerIcon.displayName = 'ScannerIcon';
      