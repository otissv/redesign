import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TrophyIcon: FC<IconInterface> = function TrophyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrophyIcon ${className}`;
      return (
        <Icon alt="Trophy" className={classNames} {...propsRest}>
          <path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z" />

        </Icon>
      );
    };
    TrophyIcon.displayName = 'TrophyIcon';
      