import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EyeMinusIcon: FC<IconInterface> = function EyeMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EyeMinusIcon ${className}`;
      return (
        <Icon alt="EyeMinus" className={classNames} {...propsRest}>
          <path d="M12 4.5A11.8 11.8 0 0 0 1 12A11.8 11.8 0 0 0 12 19.5H13.1A3.8 3.8 0 0 1 13 18.5A9.9 9.9 0 0 1 13.2 16.8L12 17A5 5 0 1 1 17 12A2.8 2.8 0 0 1 16.9 12.9A5.2 5.2 0 0 1 19 12.5A5.6 5.6 0 0 1 22.3 13.5A10.1 10.1 0 0 0 23 12A11.8 11.8 0 0 0 12 4.5M12 9A3 3 0 1 0 15 12A2.9 2.9 0 0 0 12 9M15 17.5V19.5H23V17.5Z" />

        </Icon>
      );
    };
    EyeMinusIcon.displayName = 'EyeMinusIcon';
      