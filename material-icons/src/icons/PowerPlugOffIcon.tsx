import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PowerPlugOffIcon: FC<IconInterface> = function PowerPlugOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PowerPlugOffIcon ${className}`;
      return (
        <Icon alt="PowerPlugOff" className={classNames} {...propsRest}>
          <path d="M20.84 22.73L15.31 17.2L14.5 18V21H9.5V18L6 14.5V9C6 8.7 6.1 8.41 6.25 8.14L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18 14.5V9C18 8 17 7 16 7V3H14V7H10.2L17.85 14.65L18 14.5M10 3H8V4.8L10 6.8V3Z" />

        </Icon>
      );
    };
    PowerPlugOffIcon.displayName = 'PowerPlugOffIcon';
      