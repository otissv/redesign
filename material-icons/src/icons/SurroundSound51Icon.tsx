import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SurroundSound51Icon: FC<IconInterface> = function SurroundSound51Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `SurroundSound51Icon ${className}`;
      return (
        <Icon alt="SurroundSound51" className={classNames} {...propsRest}>
          <path d="M13,17A1,1 0 0,1 12,16A1,1 0 0,1 13,15A1,1 0 0,1 14,16A1,1 0 0,1 13,17M19,7V15H20V17H16V15H17V9H16L17,7H19M6,13A2,2 0 0,1 4,11V7H10V9H6V11H8A2,2 0 0,1 10,13V15A2,2 0 0,1 8,17H4V15H8V13H6Z" />

        </Icon>
      );
    };
    SurroundSound51Icon.displayName = 'SurroundSound51Icon';
      