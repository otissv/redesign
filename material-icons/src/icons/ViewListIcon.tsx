import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewListIcon: FC<IconInterface> = function ViewListIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewListIcon ${className}`;
      return (
        <Icon alt="ViewList" className={classNames} {...propsRest}>
          <path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z" />

        </Icon>
      );
    };
    ViewListIcon.displayName = 'ViewListIcon';
      