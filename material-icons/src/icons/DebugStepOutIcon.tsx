import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DebugStepOutIcon: FC<IconInterface> = function DebugStepOutIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DebugStepOutIcon ${className}`;
      return (
        <Icon alt="DebugStepOut" className={classNames} {...propsRest}>
          <path d="M12,22A2,2 0 0,1 10,20A2,2 0 0,1 12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22M13,16H11V6L6.5,10.5L5.08,9.08L12,2.16L18.92,9.08L17.5,10.5L13,6V16Z" />

        </Icon>
      );
    };
    DebugStepOutIcon.displayName = 'DebugStepOutIcon';
      