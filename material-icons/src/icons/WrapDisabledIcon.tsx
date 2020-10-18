import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WrapDisabledIcon: FC<IconInterface> = function WrapDisabledIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WrapDisabledIcon ${className}`;
      return (
        <Icon alt="WrapDisabled" className={classNames} {...propsRest}>
          <path d="M16,7H3V5H16V7M3,19H16V17H3V19M22,12L18,9V11H3V13H18V15L22,12Z" />

        </Icon>
      );
    };
    WrapDisabledIcon.displayName = 'WrapDisabledIcon';
      