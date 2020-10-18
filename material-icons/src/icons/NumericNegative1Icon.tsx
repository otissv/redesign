import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NumericNegative1Icon: FC<IconInterface> = function NumericNegative1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `NumericNegative1Icon ${className}`;
      return (
        <Icon alt="NumericNegative1" className={classNames} {...propsRest}>
          <path d="M13 7V9H15V17H17V7H13M11 13H6V11H11V13Z" />

        </Icon>
      );
    };
    NumericNegative1Icon.displayName = 'NumericNegative1Icon';
      