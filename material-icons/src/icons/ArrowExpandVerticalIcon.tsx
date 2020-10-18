import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowExpandVerticalIcon: FC<IconInterface> = function ArrowExpandVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowExpandVerticalIcon ${className}`;
      return (
        <Icon alt="ArrowExpandVertical" className={classNames} {...propsRest}>
          <path d="M13,9V15H16L12,19L8,15H11V9H8L12,5L16,9H13M4,2H20V4H4V2M4,20H20V22H4V20Z" />

        </Icon>
      );
    };
    ArrowExpandVerticalIcon.displayName = 'ArrowExpandVerticalIcon';
      