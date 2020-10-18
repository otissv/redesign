import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FloppyIcon: FC<IconInterface> = function FloppyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FloppyIcon ${className}`;
      return (
        <Icon alt="Floppy" className={classNames} {...propsRest}>
          <path d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5.5L18.5,3H17V9A1,1 0 0,1 16,10H8A1,1 0 0,1 7,9V3H5M12,4V9H15V4H12M7,12H17A1,1 0 0,1 18,13V19H6V13A1,1 0 0,1 7,12Z" />

        </Icon>
      );
    };
    FloppyIcon.displayName = 'FloppyIcon';
      