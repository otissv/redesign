import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewSplitVerticalIcon: FC<IconInterface> = function ViewSplitVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewSplitVerticalIcon ${className}`;
      return (
        <Icon alt="ViewSplitVertical" className={classNames} {...propsRest}>
          <path d="M13,5H21V19H13V5M3,5H11V7H3V5M3,11V9H11V11H3M3,19V17H11V19H3M3,15V13H11V15H3Z" />

        </Icon>
      );
    };
    ViewSplitVerticalIcon.displayName = 'ViewSplitVerticalIcon';
      