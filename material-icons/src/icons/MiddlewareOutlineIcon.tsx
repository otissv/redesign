import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MiddlewareOutlineIcon: FC<IconInterface> = function MiddlewareOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MiddlewareOutlineIcon ${className}`;
      return (
        <Icon alt="MiddlewareOutline" className={classNames} {...propsRest}>
          <path d="M23 12L19 8V11H15.86C15.41 9.28 13.86 8 12 8S8.59 9.28 8.14 11H5L2 8V16L5 13H8.14C8.59 14.72 10.14 16 12 16S15.41 14.72 15.86 13H19V16L23 12M12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10S14 10.9 14 12C14 13.1 13.1 14 12 14Z" />

        </Icon>
      );
    };
    MiddlewareOutlineIcon.displayName = 'MiddlewareOutlineIcon';
      