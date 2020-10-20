import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CeilingLightIcon: FC<IconInterface> = function CeilingLightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CeilingLightIcon ${className}`;
      return (
        <Icon alt="CeilingLight" className={classNames} {...propsRest}>
          <path d="M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z" />

        </Icon>
      );
    };
    CeilingLightIcon.displayName = 'CeilingLightIcon';
      