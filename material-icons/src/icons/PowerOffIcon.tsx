import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PowerOffIcon: FC<IconInterface> = function PowerOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PowerOffIcon ${className}`;
      return (
        <Icon alt="PowerOff" className={classNames} {...propsRest}>
          <path d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19Z" />

        </Icon>
      );
    };
    PowerOffIcon.displayName = 'PowerOffIcon';
      