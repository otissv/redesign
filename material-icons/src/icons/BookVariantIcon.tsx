import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookVariantIcon: FC<IconInterface> = function BookVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookVariantIcon ${className}`;
      return (
        <Icon alt="BookVariant" className={classNames} {...propsRest}>
          <path d="M6,4H11V12L8.5,10.5L6,12M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />

        </Icon>
      );
    };
    BookVariantIcon.displayName = 'BookVariantIcon';
      