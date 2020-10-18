import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatLineSpacingIcon: FC<IconInterface> = function FormatLineSpacingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatLineSpacingIcon ${className}`;
      return (
        <Icon alt="FormatLineSpacing" className={classNames} {...propsRest}>
          <path d="M10,13H22V11H10M10,19H22V17H10M10,7H22V5H10M6,7H8.5L5,3.5L1.5,7H4V17H1.5L5,20.5L8.5,17H6V7Z" />

        </Icon>
      );
    };
    FormatLineSpacingIcon.displayName = 'FormatLineSpacingIcon';
      