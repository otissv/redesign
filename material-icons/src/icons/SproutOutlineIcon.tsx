import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SproutOutlineIcon: FC<IconInterface> = function SproutOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SproutOutlineIcon ${className}`;
      return (
        <Icon alt="SproutOutline" className={classNames} {...propsRest}>
          <path d="M23,4.1V2.3L21.2,2.1C21.1,2.1 20.5,2 19.5,2C15.4,2 12.4,3.2 10.7,5.3C9.4,4.5 7.6,4 5.5,4C4.5,4 3.8,4.1 3.8,4.1L1.9,4.4L2,6.1C2.1,9.1 3.6,14.8 8.8,14.8C8.9,14.8 8.9,14.8 9,14.8V18.2C5.2,18.7 2,20 2,20V22H22V20C22,20 18.8,18.7 15,18.2V15C21.3,14.9 23,7.8 23,4.1M12,18C11.7,18 11.3,18 11,18V12.4C11,12.4 10.8,9 8,9C8,9 9.5,9.8 9.9,12.7C9.5,12.8 9.1,12.8 8.8,12.8C4.2,12.8 4,6.1 4,6.1C4,6.1 4.6,6 5.5,6C7.4,6 10.5,6.4 11.4,9.1C11.9,4.6 17,4 19.5,4C20.4,4 21,4.1 21,4.1C21,4.1 21,13.1 14.7,13.1C14.5,13.1 14.2,13.1 14,13.1C14,11.1 16,8.1 16,8.1C13,9.1 13,13 13,13V18C12.7,18 12.3,18 12,18Z" />

        </Icon>
      );
    };
    SproutOutlineIcon.displayName = 'SproutOutlineIcon';
      