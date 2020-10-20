import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewSequentialOutlineIcon: FC<IconInterface> = function ViewSequentialOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewSequentialOutlineIcon ${className}`;
      return (
        <Icon alt="ViewSequentialOutline" className={classNames} {...propsRest}>
          <path d="M3 5V19H21V5H3M19 7V9H5V7H19M19 11V13H5V11H19M5 17V15H19V17H5Z" />

        </Icon>
      );
    };
    ViewSequentialOutlineIcon.displayName = 'ViewSequentialOutlineIcon';
      