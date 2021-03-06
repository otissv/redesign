import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SizeXlIcon: FC<IconInterface> = function SizeXlIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SizeXlIcon ${className}`;
      return (
        <Icon alt="SizeXl" className={classNames} {...propsRest}>
          <path d="M6 7H8L9 9.5L10 7H12L10 12L12 17H10L9 14.5L8 17H6L8 12L6 7M13 7H15V15H19V17H13V7Z" />

        </Icon>
      );
    };
    SizeXlIcon.displayName = 'SizeXlIcon';
      