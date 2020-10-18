import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const UndoIcon: FC<IconInterface> = function UndoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UndoIcon ${className}`;
      return (
        <Icon alt="Undo" className={classNames} {...propsRest}>
          <path d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" />

        </Icon>
      );
    };
    UndoIcon.displayName = 'UndoIcon';
      