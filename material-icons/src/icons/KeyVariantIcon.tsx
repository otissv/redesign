import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KeyVariantIcon: FC<IconInterface> = function KeyVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyVariantIcon ${className}`;
      return (
        <Icon alt="KeyVariant" className={classNames} {...propsRest}>
          <path d="M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z" />

        </Icon>
      );
    };
    KeyVariantIcon.displayName = 'KeyVariantIcon';
      