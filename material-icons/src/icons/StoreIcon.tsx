import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StoreIcon: FC<IconInterface> = function StoreIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StoreIcon ${className}`;
      return (
        <Icon alt="Store" className={classNames} {...propsRest}>
          <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />

        </Icon>
      );
    };
    StoreIcon.displayName = 'StoreIcon';
      