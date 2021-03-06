import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric7CircleIcon: FC<IconInterface> = function Numeric7CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric7CircleIcon ${className}`;
      return (
        <Icon alt="Numeric7Circle" className={classNames} {...propsRest}>
          <path d="M11,17L15,9V7H9V9H13L9,17H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    Numeric7CircleIcon.displayName = 'Numeric7CircleIcon';
      