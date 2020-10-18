import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LessThanOrEqualIcon: FC<IconInterface> = function LessThanOrEqualIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LessThanOrEqualIcon ${className}`;
      return (
        <Icon alt="LessThanOrEqual" className={classNames} {...propsRest}>
          <path d="M18.5,2.27L5,10.14L18.5,18L19.5,16.27L8.97,10.14L19.5,4L18.5,2.27M5,20V22H20V20H5Z" />

        </Icon>
      );
    };
    LessThanOrEqualIcon.displayName = 'LessThanOrEqualIcon';
      