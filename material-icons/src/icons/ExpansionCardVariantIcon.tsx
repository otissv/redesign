import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ExpansionCardVariantIcon: FC<IconInterface> = function ExpansionCardVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ExpansionCardVariantIcon ${className}`;
      return (
        <Icon alt="ExpansionCardVariant" className={classNames} {...propsRest}>
          <path d="M2 7H4.5V17H3V8.5H2M22 7V16H14V17H7V16H6V7M10 9H8V12H10M13 9H11V12H13M20 9H15V14H20V9Z" />

        </Icon>
      );
    };
    ExpansionCardVariantIcon.displayName = 'ExpansionCardVariantIcon';
      