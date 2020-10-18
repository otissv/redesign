import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HeartFlashIcon: FC<IconInterface> = function HeartFlashIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HeartFlashIcon ${className}`;
      return (
        <Icon alt="HeartFlash" className={classNames} {...propsRest}>
          <path d="M16.5,2.83C14.76,2.83 13.09,3.64 12,4.9C10.91,3.64 9.24,2.83 7.5,2.83C4.42,2.83 2,5.24 2,8.33C2,12.1 5.4,15.19 10.55,19.86L12,21.17L13.45,19.86C18.6,15.19 22,12.1 22,8.33C22,5.24 19.58,2.83 16.5,2.83M12,17.83V13.83H9L12,6.83V10.83H15" />

        </Icon>
      );
    };
    HeartFlashIcon.displayName = 'HeartFlashIcon';
      