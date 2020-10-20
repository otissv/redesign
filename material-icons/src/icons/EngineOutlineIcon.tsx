import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EngineOutlineIcon: FC<IconInterface> = function EngineOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EngineOutlineIcon ${className}`;
      return (
        <Icon alt="EngineOutline" className={classNames} {...propsRest}>
          <path d="M8,10H16V18H11L9,16H7V11M7,4V6H10V8H7L5,10V13H3V10H1V18H3V15H5V18H8L10,20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z" />

        </Icon>
      );
    };
    EngineOutlineIcon.displayName = 'EngineOutlineIcon';
      