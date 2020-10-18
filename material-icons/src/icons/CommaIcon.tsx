import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CommaIcon: FC<IconInterface> = function CommaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommaIcon ${className}`;
      return (
        <Icon alt="Comma" className={classNames} {...propsRest}>
          <path d="M7,3H16.95V12.96L12.96,20.94H8L11.97,12.96H7V3Z" />

        </Icon>
      );
    };
    CommaIcon.displayName = 'CommaIcon';
      