import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CropSquareIcon: FC<IconInterface> = function CropSquareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CropSquareIcon ${className}`;
      return (
        <Icon alt="CropSquare" className={classNames} {...propsRest}>
          <path d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z" />

        </Icon>
      );
    };
    CropSquareIcon.displayName = 'CropSquareIcon';
      