import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeMinusOutlineIcon: FC<IconInterface> = function HomeMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeMinusOutlineIcon ${className}`;
      return (
        <Icon alt="HomeMinusOutline" className={classNames} {...propsRest}>
          <path d="M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M16 13V15H8V13H16Z" />

        </Icon>
      );
    };
    HomeMinusOutlineIcon.displayName = 'HomeMinusOutlineIcon';
      