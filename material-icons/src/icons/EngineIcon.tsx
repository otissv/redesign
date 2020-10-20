import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EngineIcon: FC<IconInterface> = function EngineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EngineIcon ${className}`;
      return (
        <Icon alt="Engine" className={classNames} {...propsRest}>
          <path d="M7,4V6H10V8H7L5,10V13H3V10H1V18H3V15H5V18H8L10,20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z" />

        </Icon>
      );
    };
    EngineIcon.displayName = 'EngineIcon';
      