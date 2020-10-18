import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatAnnotationPlusIcon: FC<IconInterface> = function FormatAnnotationPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatAnnotationPlusIcon ${className}`;
      return (
        <Icon alt="FormatAnnotationPlus" className={classNames} {...propsRest}>
          <path d="M8.5,7H10.5L16,21H13.6L12.5,18H6.3L5.2,21H3L8.5,7M7.1,16H11.9L9.5,9.7L7.1,16M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z" />

        </Icon>
      );
    };
    FormatAnnotationPlusIcon.displayName = 'FormatAnnotationPlusIcon';
      