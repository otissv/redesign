import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CompassIcon: FC<IconInterface> = function CompassIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CompassIcon ${className}`;
      return (
        <Icon alt="Compass" className={classNames} {...propsRest}>
          <path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z" />

        </Icon>
      );
    };
    CompassIcon.displayName = 'CompassIcon';
      