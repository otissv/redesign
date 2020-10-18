import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomePlusOutlineIcon: FC<IconInterface> = function HomePlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomePlusOutlineIcon ${className}`;
      return (
        <Icon alt="HomePlusOutline" className={classNames} {...propsRest}>
          <path d="M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M11 10H13V13H16V15H13V18H11V15H8V13H11V10Z" />

        </Icon>
      );
    };
    HomePlusOutlineIcon.displayName = 'HomePlusOutlineIcon';
      