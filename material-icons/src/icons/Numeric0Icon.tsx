import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric0Icon: FC<IconInterface> = function Numeric0Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric0Icon ${className}`;
      return (
        <Icon alt="Numeric0" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9Z" />

        </Icon>
      );
    };
    Numeric0Icon.displayName = 'Numeric0Icon';
      