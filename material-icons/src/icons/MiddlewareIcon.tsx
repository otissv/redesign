import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MiddlewareIcon: FC<IconInterface> = function MiddlewareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MiddlewareIcon ${className}`;
      return (
        <Icon alt="Middleware" className={classNames} {...propsRest}>
          <path d="M23 12L19 8V11H14.82C14.4 9.84 13.3 9 12 9S9.6 9.84 9.18 11H5L2 8V16L5 13H9.18C9.6 14.16 10.7 15 12 15S14.4 14.16 14.82 13H19V16L23 12Z" />

        </Icon>
      );
    };
    MiddlewareIcon.displayName = 'MiddlewareIcon';
      