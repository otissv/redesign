import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SurroundSound71Icon: FC<IconInterface> = function SurroundSound71Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `SurroundSound71Icon ${className}`;
      return (
        <Icon alt="SurroundSound71" className={classNames} {...propsRest}>
          <path d="M12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17M18,7V15H19V17H15V15H16V9H15L16,7H18M11,7L8,17H6L8.4,9H5V7H11Z" />

        </Icon>
      );
    };
    SurroundSound71Icon.displayName = 'SurroundSound71Icon';
      