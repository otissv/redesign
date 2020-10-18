import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ContrastIcon: FC<IconInterface> = function ContrastIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContrastIcon ${className}`;
      return (
        <Icon alt="Contrast" className={classNames} {...propsRest}>
          <path d="M4.38,20.9C3.78,20.71 3.3,20.23 3.1,19.63L19.63,3.1C20.23,3.3 20.71,3.78 20.9,4.38L4.38,20.9M20,16V18H13V16H20M3,6H6V3H8V6H11V8H8V11H6V8H3V6Z" />

        </Icon>
      );
    };
    ContrastIcon.displayName = 'ContrastIcon';
      