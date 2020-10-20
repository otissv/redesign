import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewGridIcon: FC<IconInterface> = function ViewGridIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewGridIcon ${className}`;
      return (
        <Icon alt="ViewGrid" className={classNames} {...propsRest}>
          <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />

        </Icon>
      );
    };
    ViewGridIcon.displayName = 'ViewGridIcon';
      