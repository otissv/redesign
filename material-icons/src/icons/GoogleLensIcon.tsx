import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GoogleLensIcon: FC<IconInterface> = function GoogleLensIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GoogleLensIcon ${className}`;
      return (
        <Icon alt="GoogleLens" className={classNames} {...propsRest}>
          <path d="M6,2H18A4,4 0 0,1 22,6V12H20V6A2,2 0 0,0 18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H12V22H6A4,4 0 0,1 2,18V6A4,4 0 0,1 6,2M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M18,16A2,2 0 0,1 20,18A2,2 0 0,1 18,20A2,2 0 0,1 16,18A2,2 0 0,1 18,16Z" />

        </Icon>
      );
    };
    GoogleLensIcon.displayName = 'GoogleLensIcon';
      