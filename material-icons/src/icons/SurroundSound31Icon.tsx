import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SurroundSound31Icon: FC<IconInterface> = function SurroundSound31Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `SurroundSound31Icon ${className}`;
      return (
        <Icon alt="SurroundSound31" className={classNames} {...propsRest}>
          <path d="M13,17A1,1 0 0,1 12,16A1,1 0 0,1 13,15A1,1 0 0,1 14,16A1,1 0 0,1 13,17M19,7V15H20V17H16V15H17V9H16L17,7H19M4,7H8A2,2 0 0,1 10,9V15A2,2 0 0,1 8,17H4V15H8V13H5V11H8V9H4V7Z" />

        </Icon>
      );
    };
    SurroundSound31Icon.displayName = 'SurroundSound31Icon';
      