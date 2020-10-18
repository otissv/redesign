import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatListBulletedTriangleIcon: FC<IconInterface> = function FormatListBulletedTriangleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatListBulletedTriangleIcon ${className}`;
      return (
        <Icon alt="FormatListBulletedTriangle" className={classNames} {...propsRest}>
          <path d="M5,15.5L7.5,20H2.5L5,15.5M9,19H21V17H9V19M5,9.5L7.5,14H2.5L5,9.5M9,13H21V11H9V13M5,3.5L7.5,8H2.5L5,3.5M9,7H21V5H9V7Z" />

        </Icon>
      );
    };
    FormatListBulletedTriangleIcon.displayName = 'FormatListBulletedTriangleIcon';
      