import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StarThreePointsOutlineIcon: FC<IconInterface> = function StarThreePointsOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarThreePointsOutlineIcon ${className}`;
      return (
        <Icon alt="StarThreePointsOutline" className={classNames} {...propsRest}>
          <path d="M12,9.5L13.2,13.5L16,16.5L12,15.6L7.9,16.5L10.7,13.5L12,9.5M12,2.6L9,12.4L2,19.9L12,17.6L22,20L15,12.5L12,2.6Z" />

        </Icon>
      );
    };
    StarThreePointsOutlineIcon.displayName = 'StarThreePointsOutlineIcon';
      