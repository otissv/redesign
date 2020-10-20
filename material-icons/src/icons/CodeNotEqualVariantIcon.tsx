import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CodeNotEqualVariantIcon: FC<IconInterface> = function CodeNotEqualVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CodeNotEqualVariantIcon ${className}`;
      return (
        <Icon alt="CodeNotEqualVariant" className={classNames} {...propsRest}>
          <path d="M11,6.5V9.33L8.33,12L11,14.67V17.5L5.5,12M13,6.43L18.57,12L13,17.57V14.74L15.74,12L13,9.26M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" />

        </Icon>
      );
    };
    CodeNotEqualVariantIcon.displayName = 'CodeNotEqualVariantIcon';
      