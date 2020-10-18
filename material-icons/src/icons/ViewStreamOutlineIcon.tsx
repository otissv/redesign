import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewStreamOutlineIcon: FC<IconInterface> = function ViewStreamOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewStreamOutlineIcon ${className}`;
      return (
        <Icon alt="ViewStreamOutline" className={classNames} {...propsRest}>
          <path d="M4 6V18H21V6H4M19 16H6V13H19V16M6 11V8H19V11H6Z" />

        </Icon>
      );
    };
    ViewStreamOutlineIcon.displayName = 'ViewStreamOutlineIcon';
      