import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BeakerIcon: FC<IconInterface> = function BeakerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BeakerIcon ${className}`;
      return (
        <Icon alt="Beaker" className={classNames} {...propsRest}>
          <path d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />

        </Icon>
      );
    };
    BeakerIcon.displayName = 'BeakerIcon';
      