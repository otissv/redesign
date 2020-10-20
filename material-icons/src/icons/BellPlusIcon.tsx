import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BellPlusIcon: FC<IconInterface> = function BellPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BellPlusIcon ${className}`;
      return (
        <Icon alt="BellPlus" className={classNames} {...propsRest}>
          <path d="M17 14V17H14V19H17V22H19V19H22V17H19V14M12 2A2 2 0 0 0 10 4A2 2 0 0 0 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12.35A6 6 0 0 1 12 18A6 6 0 0 1 18 12A6 6 0 0 1 19 12.09V11C19 7.82 16.88 5.14 14 4.29A2 2 0 0 0 14 4A2 2 0 0 0 12 2M10 21A2 2 0 0 0 12 23A2 2 0 0 0 13.65 22.13A6 6 0 0 1 12.81 21Z" />

        </Icon>
      );
    };
    BellPlusIcon.displayName = 'BellPlusIcon';
      