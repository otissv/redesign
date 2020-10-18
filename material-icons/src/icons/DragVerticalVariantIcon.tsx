import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DragVerticalVariantIcon: FC<IconInterface> = function DragVerticalVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DragVerticalVariantIcon ${className}`;
      return (
        <Icon alt="DragVerticalVariant" className={classNames} {...propsRest}>
          <path d="M11 21H9V3H11V21M15 3H13V21H15V3Z" />

        </Icon>
      );
    };
    DragVerticalVariantIcon.displayName = 'DragVerticalVariantIcon';
      