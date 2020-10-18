import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CloseThickIcon: FC<IconInterface> = function CloseThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CloseThickIcon ${className}`;
      return (
        <Icon alt="CloseThick" className={classNames} {...propsRest}>
          <path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />

        </Icon>
      );
    };
    CloseThickIcon.displayName = 'CloseThickIcon';
      