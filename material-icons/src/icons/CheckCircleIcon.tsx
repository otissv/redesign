import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckCircleIcon: FC<IconInterface> = function CheckCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckCircleIcon ${className}`;
      return (
        <Icon alt="CheckCircle" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />

        </Icon>
      );
    };
    CheckCircleIcon.displayName = 'CheckCircleIcon';
      