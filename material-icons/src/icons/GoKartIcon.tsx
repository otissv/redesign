import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GoKartIcon: FC<IconInterface> = function GoKartIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GoKartIcon ${className}`;
      return (
        <Icon alt="GoKart" className={classNames} {...propsRest}>
          <path d="M18,10H15.53L14.38,8.28L15.8,7.33L14.7,5.67L10.2,8.67L11.3,10.33L12.73,9.38L13.88,11.12L13,12H10.2L5.83,5.45L4.17,6.55L5.87,9.11C3.04,9.65 1,12.12 1,15V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V15A5,5 0 0,0 18,10M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5Z" />

        </Icon>
      );
    };
    GoKartIcon.displayName = 'GoKartIcon';
      