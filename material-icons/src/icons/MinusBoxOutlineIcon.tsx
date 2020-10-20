import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MinusBoxOutlineIcon: FC<IconInterface> = function MinusBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MinusBoxOutlineIcon ${className}`;
      return (
        <Icon alt="MinusBoxOutline" className={classNames} {...propsRest}>
          <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z" />

        </Icon>
      );
    };
    MinusBoxOutlineIcon.displayName = 'MinusBoxOutlineIcon';
      