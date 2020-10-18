import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric6CircleIcon: FC<IconInterface> = function Numeric6CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric6CircleIcon ${className}`;
      return (
        <Icon alt="Numeric6Circle" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H11M11,13H13V15H11V13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    Numeric6CircleIcon.displayName = 'Numeric6CircleIcon';
      