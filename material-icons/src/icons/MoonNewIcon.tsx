import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MoonNewIcon: FC<IconInterface> = function MoonNewIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonNewIcon ${className}`;
      return (
        <Icon alt="MoonNew" className={classNames} {...propsRest}>
          <path d="M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />

        </Icon>
      );
    };
    MoonNewIcon.displayName = 'MoonNewIcon';
      