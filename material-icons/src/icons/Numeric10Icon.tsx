import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric10Icon: FC<IconInterface> = function Numeric10Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric10Icon ${className}`;
      return (
        <Icon alt="Numeric10" className={classNames} {...propsRest}>
          <path d="M10 7H6V9H8V17H10V7M16 7H14C12.9 7 12 7.9 12 9V15C12 16.11 12.9 17 14 17H16C17.11 17 18 16.11 18 15V9C18 7.9 17.11 7 16 7M16 15H14V9H16V15Z" />

        </Icon>
      );
    };
    Numeric10Icon.displayName = 'Numeric10Icon';
      