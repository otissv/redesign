import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatPaintIcon: FC<IconInterface> = function FormatPaintIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatPaintIcon ${className}`;
      return (
        <Icon alt="FormatPaint" className={classNames} {...propsRest}>
          <path d="M18,4V3A1,1 0 0,0 17,2H5A1,1 0 0,0 4,3V7A1,1 0 0,0 5,8H17A1,1 0 0,0 18,7V6H19V10H9V21A1,1 0 0,0 10,22H12A1,1 0 0,0 13,21V12H21V4H18Z" />

        </Icon>
      );
    };
    FormatPaintIcon.displayName = 'FormatPaintIcon';
      