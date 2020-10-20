import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SprinklerIcon: FC<IconInterface> = function SprinklerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SprinklerIcon ${className}`;
      return (
        <Icon alt="Sprinkler" className={classNames} {...propsRest}>
          <path d="M11 7H13V9H11V7M5 22H9V10H5V22M14 11H16V9H14V11M17 10H19V8H17V10M17 5V7H19V5H17M14 8H16V6H14V8M17 13H19V11H17V13M5 7H5.33L6 9H8L8.67 7H9V6H5V7Z" />

        </Icon>
      );
    };
    SprinklerIcon.displayName = 'SprinklerIcon';
      