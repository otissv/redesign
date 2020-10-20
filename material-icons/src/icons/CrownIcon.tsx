import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CrownIcon: FC<IconInterface> = function CrownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CrownIcon ${className}`;
      return (
        <Icon alt="Crown" className={classNames} {...propsRest}>
          <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />

        </Icon>
      );
    };
    CrownIcon.displayName = 'CrownIcon';
      