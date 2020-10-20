import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ReorderHorizontalIcon: FC<IconInterface> = function ReorderHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReorderHorizontalIcon ${className}`;
      return (
        <Icon alt="ReorderHorizontal" className={classNames} {...propsRest}>
          <path d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />

        </Icon>
      );
    };
    ReorderHorizontalIcon.displayName = 'ReorderHorizontalIcon';
      