import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SwapHorizontalCircleIcon: FC<IconInterface> = function SwapHorizontalCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwapHorizontalCircleIcon ${className}`;
      return (
        <Icon alt="SwapHorizontalCircle" className={classNames} {...propsRest}>
          <path d="M22 12C22 6.5 17.5 2 12 2S2 6.5 2 12 6.5 22 12 22 22 17.5 22 12M15 6.5L18.5 10L15 13.5V11H11V9H15V6.5M9 17.5L5.5 14L9 10.5V13H13V15H9V17.5Z" />

        </Icon>
      );
    };
    SwapHorizontalCircleIcon.displayName = 'SwapHorizontalCircleIcon';
      