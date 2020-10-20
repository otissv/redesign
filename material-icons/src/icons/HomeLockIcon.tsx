import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeLockIcon: FC<IconInterface> = function HomeLockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeLockIcon ${className}`;
      return (
        <Icon alt="HomeLock" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M12,9A3,3 0 0,1 15,12V13H16V17H8V13H9V12A3,3 0 0,1 12,9M12,11A1,1 0 0,0 11,12V13H13V12C13,11.5 12.6,11 12,11Z" />

        </Icon>
      );
    };
    HomeLockIcon.displayName = 'HomeLockIcon';
      