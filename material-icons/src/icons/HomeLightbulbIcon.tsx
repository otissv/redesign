import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeLightbulbIcon: FC<IconInterface> = function HomeLightbulbIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeLightbulbIcon ${className}`;
      return (
        <Icon alt="HomeLightbulb" className={classNames} {...propsRest}>
          <path d="M12 3L2 12H5V20H19V12H22M13 18H11V17H13M13.5 14.58V16H10.5V14.58A3 3 0 1 1 13.5 14.58Z" />

        </Icon>
      );
    };
    HomeLightbulbIcon.displayName = 'HomeLightbulbIcon';
      