import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ScanHelperIcon: FC<IconInterface> = function ScanHelperIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ScanHelperIcon ${className}`;
      return (
        <Icon alt="ScanHelper" className={classNames} {...propsRest}>
          <path d="M0 2A2 2 0 0 1 2 0H6V2H2V6H0V2M24 22A2 2 0 0 1 22 24H18V22H22V18H24V22M2 24A2 2 0 0 1 0 22V18H2V22H6V24H2M22 0A2 2 0 0 1 24 2V6H22V2H18V0H22Z" />

        </Icon>
      );
    };
    ScanHelperIcon.displayName = 'ScanHelperIcon';
      