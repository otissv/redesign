import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric0CircleIcon: FC<IconInterface> = function Numeric0CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric0CircleIcon ${className}`;
      return (
        <Icon alt="Numeric0Circle" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    Numeric0CircleIcon.displayName = 'Numeric0CircleIcon';
      