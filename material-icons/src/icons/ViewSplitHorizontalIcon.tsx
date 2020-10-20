import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewSplitHorizontalIcon: FC<IconInterface> = function ViewSplitHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewSplitHorizontalIcon ${className}`;
      return (
        <Icon alt="ViewSplitHorizontal" className={classNames} {...propsRest}>
          <path d="M3,5H21V7H3V5M3,11V9H21V11H3M3,19V13H21V19H3Z" />

        </Icon>
      );
    };
    ViewSplitHorizontalIcon.displayName = 'ViewSplitHorizontalIcon';
      