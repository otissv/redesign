import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatVerticalAlignCenterIcon: FC<IconInterface> = function FormatVerticalAlignCenterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatVerticalAlignCenterIcon ${className}`;
      return (
        <Icon alt="FormatVerticalAlignCenter" className={classNames} {...propsRest}>
          <path d="M8,19H11V23H13V19H16L12,15L8,19M16,5H13V1H11V5H8L12,9L16,5M4,11V13H20V11H4Z" />

        </Icon>
      );
    };
    FormatVerticalAlignCenterIcon.displayName = 'FormatVerticalAlignCenterIcon';
      