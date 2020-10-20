import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewGridPlusIcon: FC<IconInterface> = function ViewGridPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewGridPlusIcon ${className}`;
      return (
        <Icon alt="ViewGridPlus" className={classNames} {...propsRest}>
          <path d="M13 3V11H21V3H13M3 21H11V13H3V21M3 3V11H11V3H3M13 16H16V13H18V16H21V18H18V21H16V18H13V16Z" />

        </Icon>
      );
    };
    ViewGridPlusIcon.displayName = 'ViewGridPlusIcon';
      