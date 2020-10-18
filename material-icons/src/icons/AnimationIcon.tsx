import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AnimationIcon: FC<IconInterface> = function AnimationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AnimationIcon ${className}`;
      return (
        <Icon alt="Animation" className={classNames} {...propsRest}>
          <path d="M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z" />

        </Icon>
      );
    };
    AnimationIcon.displayName = 'AnimationIcon';
      