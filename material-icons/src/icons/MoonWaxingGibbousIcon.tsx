import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MoonWaxingGibbousIcon: FC<IconInterface> = function MoonWaxingGibbousIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonWaxingGibbousIcon ${className}`;
      return (
        <Icon alt="MoonWaxingGibbous" className={classNames} {...propsRest}>
          <path d="M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z" />

        </Icon>
      );
    };
    MoonWaxingGibbousIcon.displayName = 'MoonWaxingGibbousIcon';
      