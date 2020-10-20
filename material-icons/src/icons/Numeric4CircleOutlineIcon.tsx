import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric4CircleOutlineIcon: FC<IconInterface> = function Numeric4CircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric4CircleOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric4CircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11V11H13V7H15V17H13V13H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    Numeric4CircleOutlineIcon.displayName = 'Numeric4CircleOutlineIcon';
      