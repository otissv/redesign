import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CoffinIcon: FC<IconInterface> = function CoffinIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CoffinIcon ${className}`;
      return (
        <Icon alt="Coffin" className={classNames} {...propsRest}>
          <path d="M8,22L5,8L8,2H16L19,8L16,22H8M11,6V8H9V10H11V15H13V10H15V8H13V6H11Z" />

        </Icon>
      );
    };
    CoffinIcon.displayName = 'CoffinIcon';
      