import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlagOutlineIcon: FC<IconInterface> = function FlagOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagOutlineIcon ${className}`;
      return (
        <Icon alt="FlagOutline" className={classNames} {...propsRest}>
          <path d="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4" />

        </Icon>
      );
    };
    FlagOutlineIcon.displayName = 'FlagOutlineIcon';
      