import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BriefcaseVariantIcon: FC<IconInterface> = function BriefcaseVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BriefcaseVariantIcon ${className}`;
      return (
        <Icon alt="BriefcaseVariant" className={classNames} {...propsRest}>
          <path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" />

        </Icon>
      );
    };
    BriefcaseVariantIcon.displayName = 'BriefcaseVariantIcon';
      