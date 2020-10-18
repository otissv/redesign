import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SmogIcon: FC<IconInterface> = function SmogIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SmogIcon ${className}`;
      return (
        <Icon alt="Smog" className={classNames} {...propsRest}>
          <path d="M12,2C10.08,2 8.5,3.35 8.09,5.15C7.45,4.44 6.53,4 5.5,4A3.5,3.5 0 0,0 2,7.5H2A3.5,3.5 0 0,0 5.5,11H6.68V12H10.72V11H13.28V12H17.32V11H18.5A3.5,3.5 0 0,0 22,7.5H22A3.5,3.5 0 0,0 18.5,4H18.5C17.47,4 16.55,4.44 15.91,5.15C15.5,3.35 13.92,2 12,2M7.2,14L6.4,22H11L10.2,14H7.2M13.8,14L13,22H17.6L16.8,14H13.8Z" />

        </Icon>
      );
    };
    SmogIcon.displayName = 'SmogIcon';
      