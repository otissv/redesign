import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TrophyAwardIcon: FC<IconInterface> = function TrophyAwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrophyAwardIcon ${className}`;
      return (
        <Icon alt="TrophyAward" className={classNames} {...propsRest}>
          <path d="M15.2 10.7L16.6 16L12 12.2L7.4 16L8.8 10.8L4.6 7.3L10 7L12 2L14 7L19.4 7.3L15.2 10.7M14 19H13V16L12 15L11 16V19H10C8.9 19 8 19.9 8 21V22H16V21C16 19.9 15.11 19 14 19Z" />

        </Icon>
      );
    };
    TrophyAwardIcon.displayName = 'TrophyAwardIcon';
      