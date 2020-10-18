import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlusMinusIcon: FC<IconInterface> = function PlusMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusMinusIcon ${className}`;
      return (
        <Icon alt="PlusMinus" className={classNames} {...propsRest}>
          <path d="M11,4V9H6V11H11V16H13V11H18V9H13V4H11M6,18V20H18V18H6Z" />

        </Icon>
      );
    };
    PlusMinusIcon.displayName = 'PlusMinusIcon';
      