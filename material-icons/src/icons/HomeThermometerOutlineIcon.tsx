import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeThermometerOutlineIcon: FC<IconInterface> = function HomeThermometerOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeThermometerOutlineIcon ${className}`;
      return (
        <Icon alt="HomeThermometerOutline" className={classNames} {...propsRest}>
          <path d="M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M12 8C11.45 8 11 8.45 11 9V13.27C10.38 13.63 10 14.29 10 15C10 16.11 10.9 17 12 17S14 16.11 14 15C14 14.29 13.62 13.63 13 13.27V9C13 8.45 12.55 8 12 8Z" />

        </Icon>
      );
    };
    HomeThermometerOutlineIcon.displayName = 'HomeThermometerOutlineIcon';
      