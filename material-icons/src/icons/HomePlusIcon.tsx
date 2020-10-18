import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomePlusIcon: FC<IconInterface> = function HomePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomePlusIcon ${className}`;
      return (
        <Icon alt="HomePlus" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z" />

        </Icon>
      );
    };
    HomePlusIcon.displayName = 'HomePlusIcon';
      