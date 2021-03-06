import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ScriptOutlineIcon: FC<IconInterface> = function ScriptOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ScriptOutlineIcon ${className}`;
      return (
        <Icon alt="ScriptOutline" className={classNames} {...propsRest}>
          <path d="M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20Z" />

        </Icon>
      );
    };
    ScriptOutlineIcon.displayName = 'ScriptOutlineIcon';
      