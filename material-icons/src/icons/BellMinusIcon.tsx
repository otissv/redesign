import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BellMinusIcon: FC<IconInterface> = function BellMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BellMinusIcon ${className}`;
      return (
        <Icon alt="BellMinus" className={classNames} {...propsRest}>
          <path d="M14 17H22V19H14M12 2A2 2 0 0 0 10 4A2 2 0 0 0 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12V15H19V11C19 7.82 16.88 5.14 14 4.29A2 2 0 0 0 14 4A2 2 0 0 0 12 2M10 21A2 2 0 0 0 12 23A2 2 0 0 0 14 21H12Z" />

        </Icon>
      );
    };
    BellMinusIcon.displayName = 'BellMinusIcon';
      