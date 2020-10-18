import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HumanGreetingIcon: FC<IconInterface> = function HumanGreetingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanGreetingIcon ${className}`;
      return (
        <Icon alt="HumanGreeting" className={classNames} {...propsRest}>
          <path d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z" />

        </Icon>
      );
    };
    HumanGreetingIcon.displayName = 'HumanGreetingIcon';
      