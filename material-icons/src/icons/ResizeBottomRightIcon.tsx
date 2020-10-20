import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ResizeBottomRightIcon: FC<IconInterface> = function ResizeBottomRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ResizeBottomRightIcon ${className}`;
      return (
        <Icon alt="ResizeBottomRight" className={classNames} {...propsRest}>
          <path d="M22,22H20V20H22V22M22,18H20V16H22V18M18,22H16V20H18V22M18,18H16V16H18V18M14,22H12V20H14V22M22,14H20V12H22V14Z" />

        </Icon>
      );
    };
    ResizeBottomRightIcon.displayName = 'ResizeBottomRightIcon';
      