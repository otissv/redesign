import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const VanUtilityIcon: FC<IconInterface> = function VanUtilityIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VanUtilityIcon ${className}`;
      return (
        <Icon alt="VanUtility" className={classNames} {...propsRest}>
          <path d="M3,7C1.89,7 1,7.89 1,9V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V13C23,11.89 22.11,11 21,11L18,7H3M15,8.5H17.5L19.46,11H15V8.5M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" />

        </Icon>
      );
    };
    VanUtilityIcon.displayName = 'VanUtilityIcon';
      