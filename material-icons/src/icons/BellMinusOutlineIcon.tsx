import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BellMinusOutlineIcon: FC<IconInterface> = function BellMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BellMinusOutlineIcon ${className}`;
      return (
        <Icon alt="BellMinusOutline" className={classNames} {...propsRest}>
          <path d="M12 2C10.9 2 10 2.9 10 4C10 4.1 10 4.19 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12V18H7V11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11V15H19V11C19 7.82 16.88 5.14 14 4.29C14 4.19 14 4.1 14 4C14 2.9 13.11 2 12 2M14 17V19H22V17M10 21C10 22.11 10.9 23 12 23C13.11 23 14 22.11 14 21H12Z" />

        </Icon>
      );
    };
    BellMinusOutlineIcon.displayName = 'BellMinusOutlineIcon';
      