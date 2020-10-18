import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SquareMediumOutlineIcon: FC<IconInterface> = function SquareMediumOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SquareMediumOutlineIcon ${className}`;
      return (
        <Icon alt="SquareMediumOutline" className={classNames} {...propsRest}>
          <path d="M14,10V14H10V10H14M16,8H8V16H16V8Z" />

        </Icon>
      );
    };
    SquareMediumOutlineIcon.displayName = 'SquareMediumOutlineIcon';
      