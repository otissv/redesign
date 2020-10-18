import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StarFourPointsIcon: FC<IconInterface> = function StarFourPointsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarFourPointsIcon ${className}`;
      return (
        <Icon alt="StarFourPoints" className={classNames} {...propsRest}>
          <path d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />

        </Icon>
      );
    };
    StarFourPointsIcon.displayName = 'StarFourPointsIcon';
      