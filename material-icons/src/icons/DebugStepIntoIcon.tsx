import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DebugStepIntoIcon: FC<IconInterface> = function DebugStepIntoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DebugStepIntoIcon ${className}`;
      return (
        <Icon alt="DebugStepInto" className={classNames} {...propsRest}>
          <path d="M12,22A2,2 0 0,1 10,20A2,2 0 0,1 12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22M13,2V13L17.5,8.5L18.92,9.92L12,16.84L5.08,9.92L6.5,8.5L11,13V2H13Z" />

        </Icon>
      );
    };
    DebugStepIntoIcon.displayName = 'DebugStepIntoIcon';
      