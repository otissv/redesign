import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SizeMIcon: FC<IconInterface> = function SizeMIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SizeMIcon ${className}`;
      return (
        <Icon alt="SizeM" className={classNames} {...propsRest}>
          <path d="M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z" />

        </Icon>
      );
    };
    SizeMIcon.displayName = 'SizeMIcon';
      