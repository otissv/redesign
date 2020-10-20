import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RoundedCornerIcon: FC<IconInterface> = function RoundedCornerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RoundedCornerIcon ${className}`;
      return (
        <Icon alt="RoundedCorner" className={classNames} {...propsRest}>
          <path d="M19,19H21V21H19V19M19,17H21V15H19V17M3,13H5V11H3V13M3,17H5V15H3V17M3,9H5V7H3V9M3,5H5V3H3V5M7,5H9V3H7V5M15,21H17V19H15V21M11,21H13V19H11V21M15,21H17V19H15V21M7,21H9V19H7V21M3,21H5V19H3V21M21,8A5,5 0 0,0 16,3H11V5H16A3,3 0 0,1 19,8V13H21V8Z" />

        </Icon>
      );
    };
    RoundedCornerIcon.displayName = 'RoundedCornerIcon';
      