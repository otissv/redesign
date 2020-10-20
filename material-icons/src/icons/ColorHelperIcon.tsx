import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ColorHelperIcon: FC<IconInterface> = function ColorHelperIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ColorHelperIcon ${className}`;
      return (
        <Icon alt="ColorHelper" className={classNames} {...propsRest}>
          <path d="M0,24H24V20H0V24Z" />

        </Icon>
      );
    };
    ColorHelperIcon.displayName = 'ColorHelperIcon';
      