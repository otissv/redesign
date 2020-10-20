import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LightbulbIcon: FC<IconInterface> = function LightbulbIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LightbulbIcon ${className}`;
      return (
        <Icon alt="Lightbulb" className={classNames} {...propsRest}>
          <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z" />

        </Icon>
      );
    };
    LightbulbIcon.displayName = 'LightbulbIcon';
      