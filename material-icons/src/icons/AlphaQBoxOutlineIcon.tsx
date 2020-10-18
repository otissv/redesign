import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaQBoxOutlineIcon: FC<IconInterface> = function AlphaQBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaQBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaQBoxOutline" className={classNames} {...propsRest}>
          <path d="M5,4H19A2,2 0 0,1 21,6V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V6A2,2 0 0,1 5,4M5,6V20H19V6H5M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />

        </Icon>
      );
    };
    AlphaQBoxOutlineIcon.displayName = 'AlphaQBoxOutlineIcon';
      