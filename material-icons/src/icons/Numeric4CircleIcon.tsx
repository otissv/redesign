import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric4CircleIcon: FC<IconInterface> = function Numeric4CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric4CircleIcon ${className}`;
      return (
        <Icon alt="Numeric4Circle" className={classNames} {...propsRest}>
          <path d="M9,7V13H13V17H15V7H13V11H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    Numeric4CircleIcon.displayName = 'Numeric4CircleIcon';
      