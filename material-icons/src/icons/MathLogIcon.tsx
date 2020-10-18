import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MathLogIcon: FC<IconInterface> = function MathLogIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MathLogIcon ${className}`;
      return (
        <Icon alt="MathLog" className={classNames} {...propsRest}>
          <path d="M18 7C16.9 7 16 7.9 16 9V15C16 16.1 16.9 17 18 17H20C21.1 17 22 16.1 22 15V11H20V15H18V9H22V7H18M2 7V17H8V15H4V7H2M11 7C9.9 7 9 7.9 9 9V15C9 16.1 9.9 17 11 17H13C14.1 17 15 16.1 15 15V9C15 7.9 14.1 7 13 7H11M11 9H13V15H11V9Z" />

        </Icon>
      );
    };
    MathLogIcon.displayName = 'MathLogIcon';
      