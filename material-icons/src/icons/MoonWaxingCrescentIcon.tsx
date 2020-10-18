import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MoonWaxingCrescentIcon: FC<IconInterface> = function MoonWaxingCrescentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonWaxingCrescentIcon ${className}`;
      return (
        <Icon alt="MoonWaxingCrescent" className={classNames} {...propsRest}>
          <path d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" />

        </Icon>
      );
    };
    MoonWaxingCrescentIcon.displayName = 'MoonWaxingCrescentIcon';
      