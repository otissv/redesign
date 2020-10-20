import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DoNotDisturbIcon: FC<IconInterface> = function DoNotDisturbIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DoNotDisturbIcon ${className}`;
      return (
        <Icon alt="DoNotDisturb" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H7V11H17V13Z" />

        </Icon>
      );
    };
    DoNotDisturbIcon.displayName = 'DoNotDisturbIcon';
      