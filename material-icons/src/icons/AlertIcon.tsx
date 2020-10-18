import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlertIcon: FC<IconInterface> = function AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlertIcon ${className}`;
      return (
        <Icon alt="Alert" className={classNames} {...propsRest}>
          <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />

        </Icon>
      );
    };
    AlertIcon.displayName = 'AlertIcon';
      