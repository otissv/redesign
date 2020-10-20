import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FireExtinguisherIcon: FC<IconInterface> = function FireExtinguisherIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FireExtinguisherIcon ${className}`;
      return (
        <Icon alt="FireExtinguisher" className={classNames} {...propsRest}>
          <path d="M10.5,7H11.75L12,5H10.25L6,7.5V9H4V6.5L10,3H12V2H14V3H16L17,2.5V5.5L16,5H14L14.25,7H15.5A1.5,1.5 0 0,1 17,8.5V22H9V8.5A1.5,1.5 0 0,1 10.5,7Z" />

        </Icon>
      );
    };
    FireExtinguisherIcon.displayName = 'FireExtinguisherIcon';
      