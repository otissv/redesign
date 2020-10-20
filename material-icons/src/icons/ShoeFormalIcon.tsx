import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShoeFormalIcon: FC<IconInterface> = function ShoeFormalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShoeFormalIcon ${className}`;
      return (
        <Icon alt="ShoeFormal" className={classNames} {...propsRest}>
          <path d="M21.5,9V8H20.5L19.5,9H15L14,8H13L7,12H4A2,2 0 0,0 2,14V16H10L13,15H15V16H21.5V14C21.5,14 22,13 22,11.5C22,10 21.5,9 21.5,9Z" />

        </Icon>
      );
    };
    ShoeFormalIcon.displayName = 'ShoeFormalIcon';
      