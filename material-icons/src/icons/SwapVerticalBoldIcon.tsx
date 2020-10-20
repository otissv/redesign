import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SwapVerticalBoldIcon: FC<IconInterface> = function SwapVerticalBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwapVerticalBoldIcon ${className}`;
      return (
        <Icon alt="SwapVerticalBold" className={classNames} {...propsRest}>
          <path d="M14,8H11V14H6V8H3L8.5,2L14,8M15.5,22L21,16H18V10H13V16H10L15.5,22Z" />

        </Icon>
      );
    };
    SwapVerticalBoldIcon.displayName = 'SwapVerticalBoldIcon';
      