import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric1CircleOutlineIcon: FC<IconInterface> = function Numeric1CircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric1CircleOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric1CircleOutline" className={classNames} {...propsRest}>
          <path d="M10,7H14V17H12V9H10V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    Numeric1CircleOutlineIcon.displayName = 'Numeric1CircleOutlineIcon';
      