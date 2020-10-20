import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PowerOnIcon: FC<IconInterface> = function PowerOnIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PowerOnIcon ${className}`;
      return (
        <Icon alt="PowerOn" className={classNames} {...propsRest}>
          <path d="M11,3H13V21H11V3Z" />

        </Icon>
      );
    };
    PowerOnIcon.displayName = 'PowerOnIcon';
      