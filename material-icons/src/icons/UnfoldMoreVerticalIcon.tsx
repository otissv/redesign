import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UnfoldMoreVerticalIcon: FC<IconInterface> = function UnfoldMoreVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UnfoldMoreVerticalIcon ${className}`;
      return (
        <Icon alt="UnfoldMoreVertical" className={classNames} {...propsRest}>
          <path d="M18.17,12L15,8.83L16.41,7.41L21,12L16.41,16.58L15,15.17L18.17,12M5.83,12L9,15.17L7.59,16.59L3,12L7.59,7.42L9,8.83L5.83,12Z" />

        </Icon>
      );
    };
    UnfoldMoreVerticalIcon.displayName = 'UnfoldMoreVerticalIcon';
      