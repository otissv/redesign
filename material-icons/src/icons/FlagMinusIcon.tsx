import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FlagMinusIcon: FC<IconInterface> = function FlagMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagMinusIcon ${className}`;
      return (
        <Icon alt="FlagMinus" className={classNames} {...propsRest}>
          <path d="M12.4,5H18V15H11L10.6,13H5V20H3V3H12L12.4,5M14,17H22V19H14V17Z" />

        </Icon>
      );
    };
    FlagMinusIcon.displayName = 'FlagMinusIcon';
      