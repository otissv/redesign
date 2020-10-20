import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SwapHorizontalIcon: FC<IconInterface> = function SwapHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwapHorizontalIcon ${className}`;
      return (
        <Icon alt="SwapHorizontal" className={classNames} {...propsRest}>
          <path d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" />

        </Icon>
      );
    };
    SwapHorizontalIcon.displayName = 'SwapHorizontalIcon';
      