import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShoeHeelIcon: FC<IconInterface> = function ShoeHeelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShoeHeelIcon ${className}`;
      return (
        <Icon alt="ShoeHeel" className={classNames} {...propsRest}>
          <path d="M3,18H11.7L17,14H18V18H20V14C20,14 21,12 21,10C21,8 20.5,6 20.5,6H18.5L18,7L10,14H8L3,16V18Z" />

        </Icon>
      );
    };
    ShoeHeelIcon.displayName = 'ShoeHeelIcon';
      