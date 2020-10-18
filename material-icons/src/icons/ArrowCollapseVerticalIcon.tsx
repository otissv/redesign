import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowCollapseVerticalIcon: FC<IconInterface> = function ArrowCollapseVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowCollapseVerticalIcon ${className}`;
      return (
        <Icon alt="ArrowCollapseVertical" className={classNames} {...propsRest}>
          <path d="M4,12H20V14H4V12M4,9H20V11H4V9M16,4L12,8L8,4H11V1H13V4H16M8,19L12,15L16,19H13V22H11V19H8Z" />

        </Icon>
      );
    };
    ArrowCollapseVerticalIcon.displayName = 'ArrowCollapseVerticalIcon';
      