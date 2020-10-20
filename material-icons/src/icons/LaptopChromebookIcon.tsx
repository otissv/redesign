import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LaptopChromebookIcon: FC<IconInterface> = function LaptopChromebookIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LaptopChromebookIcon ${className}`;
      return (
        <Icon alt="LaptopChromebook" className={classNames} {...propsRest}>
          <path d="M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z" />

        </Icon>
      );
    };
    LaptopChromebookIcon.displayName = 'LaptopChromebookIcon';
      