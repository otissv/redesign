import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric4Icon: FC<IconInterface> = function Numeric4Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric4Icon ${className}`;
      return (
        <Icon alt="Numeric4" className={classNames} {...propsRest}>
          <path d="M9,7V13H13V17H15V7H13V11H11V7H9Z" />

        </Icon>
      );
    };
    Numeric4Icon.displayName = 'Numeric4Icon';
      