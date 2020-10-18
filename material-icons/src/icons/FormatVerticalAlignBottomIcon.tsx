import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatVerticalAlignBottomIcon: FC<IconInterface> = function FormatVerticalAlignBottomIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatVerticalAlignBottomIcon ${className}`;
      return (
        <Icon alt="FormatVerticalAlignBottom" className={classNames} {...propsRest}>
          <path d="M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z" />

        </Icon>
      );
    };
    FormatVerticalAlignBottomIcon.displayName = 'FormatVerticalAlignBottomIcon';
      