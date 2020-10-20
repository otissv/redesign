import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowExpandUpIcon: FC<IconInterface> = function ArrowExpandUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowExpandUpIcon ${className}`;
      return (
        <Icon alt="ArrowExpandUp" className={classNames} {...propsRest}>
          <path d="M2,20V22H22V20H13V5.83L18.5,11.33L19.92,9.92L12,2L4.08,9.92L5.5,11.33L11,5.83V20H2Z" />

        </Icon>
      );
    };
    ArrowExpandUpIcon.displayName = 'ArrowExpandUpIcon';
      