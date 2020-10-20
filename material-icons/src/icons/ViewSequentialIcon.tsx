import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewSequentialIcon: FC<IconInterface> = function ViewSequentialIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewSequentialIcon ${className}`;
      return (
        <Icon alt="ViewSequential" className={classNames} {...propsRest}>
          <path d="M3 5H21V9H3V5M3 10H21V14H3V10M3 15H21V19H3V15Z" />

        </Icon>
      );
    };
    ViewSequentialIcon.displayName = 'ViewSequentialIcon';
      