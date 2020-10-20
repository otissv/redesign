import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WindowOpenVariantIcon: FC<IconInterface> = function WindowOpenVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WindowOpenVariantIcon ${className}`;
      return (
        <Icon alt="WindowOpenVariant" className={classNames} {...propsRest}>
          <path d="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z" />

        </Icon>
      );
    };
    WindowOpenVariantIcon.displayName = 'WindowOpenVariantIcon';
      