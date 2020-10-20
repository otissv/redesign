import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EngineOffIcon: FC<IconInterface> = function EngineOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EngineOffIcon ${className}`;
      return (
        <Icon alt="EngineOff" className={classNames} {...propsRest}>
          <path d="M3.78,2.5L21.5,20.22L20.23,21.5L18,19.27V20H10L8,18H5V15H3V18H1V10H3V13H5V10L6.87,8.14L2.5,3.77L3.78,2.5M20,9V12H18V8H12V6H15V4H7.82L22.82,19H23V9H20Z" />

        </Icon>
      );
    };
    EngineOffIcon.displayName = 'EngineOffIcon';
      