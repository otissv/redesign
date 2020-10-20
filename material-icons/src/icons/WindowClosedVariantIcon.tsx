import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WindowClosedVariantIcon: FC<IconInterface> = function WindowClosedVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WindowClosedVariantIcon ${className}`;
      return (
        <Icon alt="WindowClosedVariant" className={classNames} {...propsRest}>
          <path d="M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z" />

        </Icon>
      );
    };
    WindowClosedVariantIcon.displayName = 'WindowClosedVariantIcon';
      