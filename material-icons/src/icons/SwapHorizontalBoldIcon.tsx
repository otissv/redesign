import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SwapHorizontalBoldIcon: FC<IconInterface> = function SwapHorizontalBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwapHorizontalBoldIcon ${className}`;
      return (
        <Icon alt="SwapHorizontalBold" className={classNames} {...propsRest}>
          <path d="M8,10V13H14V18H8V21L2,15.5L8,10M22,8.5L16,3V6H10V11H16V14L22,8.5Z" />

        </Icon>
      );
    };
    SwapHorizontalBoldIcon.displayName = 'SwapHorizontalBoldIcon';
      