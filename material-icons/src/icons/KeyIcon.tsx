import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyIcon: FC<IconInterface> = function KeyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyIcon ${className}`;
      return (
        <Icon alt="Key" className={classNames} {...propsRest}>
          <path d="M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14M12.65,10C11.83,7.67 9.61,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z" />

        </Icon>
      );
    };
    KeyIcon.displayName = 'KeyIcon';
      