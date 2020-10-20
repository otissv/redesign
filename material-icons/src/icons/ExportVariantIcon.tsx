import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ExportVariantIcon: FC<IconInterface> = function ExportVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ExportVariantIcon ${className}`;
      return (
        <Icon alt="ExportVariant" className={classNames} {...propsRest}>
          <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z" />

        </Icon>
      );
    };
    ExportVariantIcon.displayName = 'ExportVariantIcon';
      