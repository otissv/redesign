import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KettleOffOutlineIcon: FC<IconInterface> = function KettleOffOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KettleOffOutlineIcon ${className}`;
      return (
        <Icon alt="KettleOffOutline" className={classNames} {...propsRest}>
          <path d="M22.1 21.5L2.4 1.7L1.1 3L4.7 6.6C4.3 7.3 4 8.1 4 9C4 10.2 4.5 11.3 5.4 12.3C4.5 13.5 4 15 4 16.5V20C4 21.1 4.9 22 6 22H19C19.3 22 19.6 21.9 19.9 21.8L20.8 22.7L22.1 21.5M8.2 10.1L7.6 10.4C7.2 10 7 9.5 7 9V8.9L8.2 10.1M6 20V16.5C6 14.7 7.6 12.6 9.7 11.6L10.9 12.8C9.1 13.4 8 14.8 8 17V18H10V17C10 16.2 10 14.5 11.4 13.3L18.1 20H6M16.9 10.1L19 8L22 11L20 13C20.7 14.1 21 15.3 21 16.5V17.8L18.9 15.7C18.5 13.9 16.8 12.1 14.6 11.4L12.2 9C13.8 8.9 15.4 9.3 16.9 10.1M9.5 6.3L7.4 4.2C8.8 3.5 10.6 3 12.5 3C14.6 3 16.6 3.5 18.3 4.7L16.3 6.7C15.3 6.1 13.9 5.7 12.5 5.7C11.4 5.7 10.3 5.9 9.5 6.3Z" />

        </Icon>
      );
    };
    KettleOffOutlineIcon.displayName = 'KettleOffOutlineIcon';
      