import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatTitleIcon: FC<IconInterface> = function FormatTitleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTitleIcon ${className}`;
      return (
        <Icon alt="FormatTitle" className={classNames} {...propsRest}>
          <path d="M5,4V7H10.5V19H13.5V7H19V4H5Z" />

        </Icon>
      );
    };
    FormatTitleIcon.displayName = 'FormatTitleIcon';
      