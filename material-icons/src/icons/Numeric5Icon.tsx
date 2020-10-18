import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric5Icon: FC<IconInterface> = function Numeric5Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric5Icon ${className}`;
      return (
        <Icon alt="Numeric5" className={classNames} {...propsRest}>
          <path d="M9,7V13H13V15H9V17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H9Z" />

        </Icon>
      );
    };
    Numeric5Icon.displayName = 'Numeric5Icon';
      