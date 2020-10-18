import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatListBulletedSquareIcon: FC<IconInterface> = function FormatListBulletedSquareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatListBulletedSquareIcon ${className}`;
      return (
        <Icon alt="FormatListBulletedSquare" className={classNames} {...propsRest}>
          <path d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" />

        </Icon>
      );
    };
    FormatListBulletedSquareIcon.displayName = 'FormatListBulletedSquareIcon';
      