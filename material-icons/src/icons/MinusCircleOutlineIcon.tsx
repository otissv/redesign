import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MinusCircleOutlineIcon: FC<IconInterface> = function MinusCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MinusCircleOutlineIcon ${className}`;
      return (
        <Icon alt="MinusCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />

        </Icon>
      );
    };
    MinusCircleOutlineIcon.displayName = 'MinusCircleOutlineIcon';
      