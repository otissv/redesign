import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SizeXxlIcon: FC<IconInterface> = function SizeXxlIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SizeXxlIcon ${className}`;
      return (
        <Icon alt="SizeXxl" className={classNames} {...propsRest}>
          <path d="M9 7H11L12 9.5L13 7H15L13 12L15 17H13L12 14.5L11 17H9L11 12L9 7M16 7H18V15H22V17H16V7M2 7H4L5 9.5L6 7H8L6 12L8 17H6L5 14.5L4 17H2L4 12L2 7Z" />

        </Icon>
      );
    };
    SizeXxlIcon.displayName = 'SizeXxlIcon';
      