import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UnfoldLessVerticalIcon: FC<IconInterface> = function UnfoldLessVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UnfoldLessVerticalIcon ${className}`;
      return (
        <Icon alt="UnfoldLessVertical" className={classNames} {...propsRest}>
          <path d="M5.41,7.41L10,12L5.41,16.59L4,15.17L7.17,12L4,8.83L5.41,7.41M18.59,16.59L14,12L18.59,7.42L20,8.83L16.83,12L20,15.17L18.59,16.59Z" />

        </Icon>
      );
    };
    UnfoldLessVerticalIcon.displayName = 'UnfoldLessVerticalIcon';
      