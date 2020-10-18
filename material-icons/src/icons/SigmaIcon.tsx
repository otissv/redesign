import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SigmaIcon: FC<IconInterface> = function SigmaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SigmaIcon ${className}`;
      return (
        <Icon alt="Sigma" className={classNames} {...propsRest}>
          <path d="M18,6H8.83L14.83,12L8.83,18H18V20H6V18L12,12L6,6V4H18V6Z" />

        </Icon>
      );
    };
    SigmaIcon.displayName = 'SigmaIcon';
      