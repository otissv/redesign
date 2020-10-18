import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KettleOffIcon: FC<IconInterface> = function KettleOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KettleOffIcon ${className}`;
      return (
        <Icon alt="KettleOff" className={classNames} {...propsRest}>
          <path d="M22.1 21.5L2.4 1.7L1.1 3L4.7 6.6C4.3 7.3 4 8.1 4 9C4 10.2 4.5 11.3 5.4 12.3C4.5 13.5 4 15 4 16.5V20C4 21.1 4.9 22 6 22H19C19.3 22 19.6 21.9 19.9 21.8L20.8 22.7L22.1 21.5M8.2 10.1L7.6 10.4C7.2 10 7 9.5 7 9V8.9L8.2 10.1M8 17.5V20H6V17.5C6 14.9 7.5 12.7 9.7 11.6L10.5 12.4C9 13.6 8 15.4 8 17.5M16.9 10.1L19 8L22 11L20 13C20.7 14.1 21 15.3 21 16.5V17.8L12.2 9H12.5C14 9 15.6 9.4 16.9 10.1M9.5 6.3L7.4 4.2C8.8 3.5 10.6 3 12.5 3C14.7 3 16.8 3.6 18.3 4.7L16.3 6.7C15.3 6.1 13.9 5.8 12.5 5.8C11.4 5.8 10.4 5.9 9.5 6.3Z" />

        </Icon>
      );
    };
    KettleOffIcon.displayName = 'KettleOffIcon';
      