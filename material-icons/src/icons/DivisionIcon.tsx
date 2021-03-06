import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DivisionIcon: FC<IconInterface> = function DivisionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DivisionIcon ${className}`;
      return (
        <Icon alt="Division" className={classNames} {...propsRest}>
          <path d="M19,13H5V11H19V13M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M12,15A2,2 0 0,1 14,17A2,2 0 0,1 12,19A2,2 0 0,1 10,17A2,2 0 0,1 12,15Z" />

        </Icon>
      );
    };
    DivisionIcon.displayName = 'DivisionIcon';
      