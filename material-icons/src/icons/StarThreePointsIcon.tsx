import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StarThreePointsIcon: FC<IconInterface> = function StarThreePointsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarThreePointsIcon ${className}`;
      return (
        <Icon alt="StarThreePoints" className={classNames} {...propsRest}>
          <path d="M12,2.6L9,12.4L2,19.9L12,17.6L22,20L15,12.5L12,2.6Z" />

        </Icon>
      );
    };
    StarThreePointsIcon.displayName = 'StarThreePointsIcon';
      