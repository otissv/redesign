import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DragHorizontalVariantIcon: FC<IconInterface> = function DragHorizontalVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DragHorizontalVariantIcon ${className}`;
      return (
        <Icon alt="DragHorizontalVariant" className={classNames} {...propsRest}>
          <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />

        </Icon>
      );
    };
    DragHorizontalVariantIcon.displayName = 'DragHorizontalVariantIcon';
      