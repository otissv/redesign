import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatTextWrappingOverflowIcon: FC<IconInterface> = function FormatTextWrappingOverflowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextWrappingOverflowIcon ${className}`;
      return (
        <Icon alt="FormatTextWrappingOverflow" className={classNames} {...propsRest}>
          <path d="M7,21H5V3H7V21M14,3H12V9H14V3M14,15H12V21H14V15M19,12L16,9V11H9V13H16V15L19,12Z" />

        </Icon>
      );
    };
    FormatTextWrappingOverflowIcon.displayName = 'FormatTextWrappingOverflowIcon';
      