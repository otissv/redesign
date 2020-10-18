import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowRightBoxIcon: FC<IconInterface> = function ArrowRightBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightBoxIcon ${className}`;
      return (
        <Icon alt="ArrowRightBox" className={classNames} {...propsRest}>
          <path d="M5,21A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5M6,13H14.5L11,16.5L12.42,17.92L18.34,12L12.42,6.08L11,7.5L14.5,11H6V13Z" />

        </Icon>
      );
    };
    ArrowRightBoxIcon.displayName = 'ArrowRightBoxIcon';
      