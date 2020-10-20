import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SwapHorizontalCircleOutlineIcon: FC<IconInterface> = function SwapHorizontalCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwapHorizontalCircleOutlineIcon ${className}`;
      return (
        <Icon alt="SwapHorizontalCircleOutline" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M15 6.5V9H11V11H15V13.5L18.5 10L15 6.5M9 10.5L5.5 14L9 17.5V15H13V13H9V10.5Z" />

        </Icon>
      );
    };
    SwapHorizontalCircleOutlineIcon.displayName = 'SwapHorizontalCircleOutlineIcon';
      