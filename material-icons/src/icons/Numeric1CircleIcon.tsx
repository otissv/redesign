import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric1CircleIcon: FC<IconInterface> = function Numeric1CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric1CircleIcon ${className}`;
      return (
        <Icon alt="Numeric1Circle" className={classNames} {...propsRest}>
          <path d="M10,7V9H12V17H14V7H10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    Numeric1CircleIcon.displayName = 'Numeric1CircleIcon';
      