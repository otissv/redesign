import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ReorderVerticalIcon: FC<IconInterface> = function ReorderVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReorderVerticalIcon ${className}`;
      return (
        <Icon alt="ReorderVertical" className={classNames} {...propsRest}>
          <path d="M9,3V21H11V3H9M5,3V21H7V3H5M13,3V21H15V3H13M19,3H17V21H19V3Z" />

        </Icon>
      );
    };
    ReorderVerticalIcon.displayName = 'ReorderVerticalIcon';
      