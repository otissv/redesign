import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatVerticalAlignTopIcon: FC<IconInterface> = function FormatVerticalAlignTopIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatVerticalAlignTopIcon ${className}`;
      return (
        <Icon alt="FormatVerticalAlignTop" className={classNames} {...propsRest}>
          <path d="M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z" />

        </Icon>
      );
    };
    FormatVerticalAlignTopIcon.displayName = 'FormatVerticalAlignTopIcon';
      