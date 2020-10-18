import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric5CircleIcon: FC<IconInterface> = function Numeric5CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric5CircleIcon ${className}`;
      return (
        <Icon alt="Numeric5Circle" className={classNames} {...propsRest}>
          <path d="M9,7V13H13V15H9V17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    Numeric5CircleIcon.displayName = 'Numeric5CircleIcon';
      