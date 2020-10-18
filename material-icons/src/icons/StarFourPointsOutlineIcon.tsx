import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StarFourPointsOutlineIcon: FC<IconInterface> = function StarFourPointsOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarFourPointsOutlineIcon ${className}`;
      return (
        <Icon alt="StarFourPointsOutline" className={classNames} {...propsRest}>
          <path d="M12,6.7L13.45,10.55L17.3,12L13.45,13.45L12,17.3L10.55,13.45L6.7,12L10.55,10.55L12,6.7M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />

        </Icon>
      );
    };
    StarFourPointsOutlineIcon.displayName = 'StarFourPointsOutlineIcon';
      