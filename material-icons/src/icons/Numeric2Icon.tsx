import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric2Icon: FC<IconInterface> = function Numeric2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric2Icon ${className}`;
      return (
        <Icon alt="Numeric2" className={classNames} {...propsRest}>
          <path d="M9,7V9H13V11H11A2,2 0 0,0 9,13V17H11L15,17V15H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9Z" />

        </Icon>
      );
    };
    Numeric2Icon.displayName = 'Numeric2Icon';
      