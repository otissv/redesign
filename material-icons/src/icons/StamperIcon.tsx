import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StamperIcon: FC<IconInterface> = function StamperIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StamperIcon ${className}`;
      return (
        <Icon alt="Stamper" className={classNames} {...propsRest}>
          <path d="M12,3A3,3 0 0,0 9,6C9,9 14,13 6,13A2,2 0 0,0 4,15V17H20V15A2,2 0 0,0 18,13C10,13 15,9 15,6C15,4 13.66,3 12,3M6,19V21H18V19H6Z" />

        </Icon>
      );
    };
    StamperIcon.displayName = 'StamperIcon';
      