import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowRightBoldBoxIcon: FC<IconInterface> = function ArrowRightBoldBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightBoldBoxIcon ${className}`;
      return (
        <Icon alt="ArrowRightBoldBox" className={classNames} {...propsRest}>
          <path d="M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z" />

        </Icon>
      );
    };
    ArrowRightBoldBoxIcon.displayName = 'ArrowRightBoldBoxIcon';
      