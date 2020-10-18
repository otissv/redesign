import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckUnderlineIcon: FC<IconInterface> = function CheckUnderlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckUnderlineIcon ${className}`;
      return (
        <Icon alt="CheckUnderline" className={classNames} {...propsRest}>
          <path d="M21,5L9,17L3.5,11.5L4.91,10.09L9,14.17L19.59,3.59L21,5M3,21V19H21V21H3Z" />

        </Icon>
      );
    };
    CheckUnderlineIcon.displayName = 'CheckUnderlineIcon';
      