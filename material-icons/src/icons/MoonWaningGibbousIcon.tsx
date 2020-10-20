import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MoonWaningGibbousIcon: FC<IconInterface> = function MoonWaningGibbousIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonWaningGibbousIcon ${className}`;
      return (
        <Icon alt="MoonWaningGibbous" className={classNames} {...propsRest}>
          <path d="M18 12C18 7.5 16.08 3.26 12 2A10 10 0 0 0 12 22C16.08 20.74 18 16.5 18 12Z" />

        </Icon>
      );
    };
    MoonWaningGibbousIcon.displayName = 'MoonWaningGibbousIcon';
      