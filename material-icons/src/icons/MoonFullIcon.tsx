import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MoonFullIcon: FC<IconInterface> = function MoonFullIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonFullIcon ${className}`;
      return (
        <Icon alt="MoonFull" className={classNames} {...propsRest}>
          <path d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" />

        </Icon>
      );
    };
    MoonFullIcon.displayName = 'MoonFullIcon';
      