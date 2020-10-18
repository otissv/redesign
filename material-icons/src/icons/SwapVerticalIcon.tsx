import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SwapVerticalIcon: FC<IconInterface> = function SwapVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwapVerticalIcon ${className}`;
      return (
        <Icon alt="SwapVertical" className={classNames} {...propsRest}>
          <path d="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z" />

        </Icon>
      );
    };
    SwapVerticalIcon.displayName = 'SwapVerticalIcon';
      