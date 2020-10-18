import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric6Icon: FC<IconInterface> = function Numeric6Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric6Icon ${className}`;
      return (
        <Icon alt="Numeric6" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H11M11,13H13V15H11V13Z" />

        </Icon>
      );
    };
    Numeric6Icon.displayName = 'Numeric6Icon';
      