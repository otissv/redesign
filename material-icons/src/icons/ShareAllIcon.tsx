import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShareAllIcon: FC<IconInterface> = function ShareAllIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShareAllIcon ${className}`;
      return (
        <Icon alt="ShareAll" className={classNames} {...propsRest}>
          <path d="M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z" />

        </Icon>
      );
    };
    ShareAllIcon.displayName = 'ShareAllIcon';
      