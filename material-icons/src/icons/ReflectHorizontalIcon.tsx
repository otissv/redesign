import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ReflectHorizontalIcon: FC<IconInterface> = function ReflectHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReflectHorizontalIcon ${className}`;
      return (
        <Icon alt="ReflectHorizontal" className={classNames} {...propsRest}>
          <path d="M22,20H14A1,1 0 0,1 13,19V4.97C13,4.5 13.31,4.12 13.74,4C14.19,3.88 14.65,4.08 14.87,4.47L22.89,18.5C23.07,18.81 23.07,19.19 22.89,19.5C22.71,19.81 22.38,20 22,20M2,20C1.62,20 1.29,19.81 1.11,19.5C0.93,19.19 0.93,18.81 1.11,18.5L9.13,4.47C9.35,4.08 9.81,3.88 10.26,4C10.69,4.12 11,4.5 11,4.97V19A1,1 0 0,1 10,20H2M9,18V8.74L3.71,18H9Z" />

        </Icon>
      );
    };
    ReflectHorizontalIcon.displayName = 'ReflectHorizontalIcon';
      