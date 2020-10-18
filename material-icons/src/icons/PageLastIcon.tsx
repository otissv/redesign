import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PageLastIcon: FC<IconInterface> = function PageLastIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PageLastIcon ${className}`;
      return (
        <Icon alt="PageLast" className={classNames} {...propsRest}>
          <path d="M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z" />

        </Icon>
      );
    };
    PageLastIcon.displayName = 'PageLastIcon';
      