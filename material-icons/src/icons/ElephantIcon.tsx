import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ElephantIcon: FC<IconInterface> = function ElephantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ElephantIcon ${className}`;
      return (
        <Icon alt="Elephant" className={classNames} {...propsRest}>
          <path d="M19.5,15.5A0.5,0.5 0 0,1 19,16A0.5,0.5 0 0,1 18.5,15.5V8.5C18.5,6.57 16.43,5 14.5,5H6A4,4 0 0,0 2,9V19H6V15H11V19H15V14.5A0.5,0.5 0 0,1 15.5,14A0.5,0.5 0 0,1 16,14.5V16A3,3 0 0,0 19,19A3,3 0 0,0 22,16V14H19.5V15.5Z" />

        </Icon>
      );
    };
    ElephantIcon.displayName = 'ElephantIcon';
      