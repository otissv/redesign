import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RedoVariantIcon: FC<IconInterface> = function RedoVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RedoVariantIcon ${className}`;
      return (
        <Icon alt="RedoVariant" className={classNames} {...propsRest}>
          <path d="M10.5,7A6.5,6.5 0 0,0 4,13.5A6.5,6.5 0 0,0 10.5,20H14V18H10.5C8,18 6,16 6,13.5C6,11 8,9 10.5,9H16.17L13.09,12.09L14.5,13.5L20,8L14.5,2.5L13.08,3.91L16.17,7H10.5M18,18H16V20H18V18Z" />

        </Icon>
      );
    };
    RedoVariantIcon.displayName = 'RedoVariantIcon';
      