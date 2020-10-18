import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MinusCircleIcon: FC<IconInterface> = function MinusCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MinusCircleIcon ${className}`;
      return (
        <Icon alt="MinusCircle" className={classNames} {...propsRest}>
          <path d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    MinusCircleIcon.displayName = 'MinusCircleIcon';
      