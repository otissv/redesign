import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NavigationIcon: FC<IconInterface> = function NavigationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NavigationIcon ${className}`;
      return (
        <Icon alt="Navigation" className={classNames} {...propsRest}>
          <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />

        </Icon>
      );
    };
    NavigationIcon.displayName = 'NavigationIcon';
      