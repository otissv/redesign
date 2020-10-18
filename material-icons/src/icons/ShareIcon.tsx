import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShareIcon: FC<IconInterface> = function ShareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShareIcon ${className}`;
      return (
        <Icon alt="Share" className={classNames} {...propsRest}>
          <path d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />

        </Icon>
      );
    };
    ShareIcon.displayName = 'ShareIcon';
      