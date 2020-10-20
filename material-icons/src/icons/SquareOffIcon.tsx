import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SquareOffIcon: FC<IconInterface> = function SquareOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SquareOffIcon ${className}`;
      return (
        <Icon alt="SquareOff" className={classNames} {...propsRest}>
          <path d="M20.84 22.73L19.11 21H3V4.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M21 3H6.2L21 17.8V3Z" />

        </Icon>
      );
    };
    SquareOffIcon.displayName = 'SquareOffIcon';
      