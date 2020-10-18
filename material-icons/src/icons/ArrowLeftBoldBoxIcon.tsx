import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowLeftBoldBoxIcon: FC<IconInterface> = function ArrowLeftBoldBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftBoldBoxIcon ${className}`;
      return (
        <Icon alt="ArrowLeftBoldBox" className={classNames} {...propsRest}>
          <path d="M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M7,12L12,17V14H16V10H12V7L7,12Z" />

        </Icon>
      );
    };
    ArrowLeftBoldBoxIcon.displayName = 'ArrowLeftBoldBoxIcon';
      