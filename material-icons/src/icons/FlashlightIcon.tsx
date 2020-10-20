import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlashlightIcon: FC<IconInterface> = function FlashlightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlashlightIcon ${className}`;
      return (
        <Icon alt="Flashlight" className={classNames} {...propsRest}>
          <path d="M9,10L6,5H18L15,10H9M18,4H6V2H18V4M9,22V11H15V22H9M12,13A1,1 0 0,0 11,14A1,1 0 0,0 12,15A1,1 0 0,0 13,14A1,1 0 0,0 12,13Z" />

        </Icon>
      );
    };
    FlashlightIcon.displayName = 'FlashlightIcon';
      