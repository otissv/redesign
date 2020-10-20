import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HeadsetOffIcon: FC<IconInterface> = function HeadsetOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HeadsetOffIcon ${className}`;
      return (
        <Icon alt="HeadsetOff" className={classNames} {...propsRest}>
          <path d="M1.5,4.77L3.57,6.84C3.2,7.82 3,8.89 3,10V20A3,3 0 0,0 6,23H12V21H5V20H9V12.27L15,18.27V20H16.73L19.23,22.5L20.5,21.22L2.78,3.5L1.5,4.77M12,1C9.47,1 7.18,2.04 5.55,3.72L6.96,5.14C8.23,3.82 10,3 12,3A7,7 0 0,1 19,10V12H15V13.18L20.5,18.67C20.81,18.19 21,17.62 21,17V10A9,9 0 0,0 12,1M5,12V10C5,9.46 5.06,8.94 5.17,8.44L8.73,12H5Z" />

        </Icon>
      );
    };
    HeadsetOffIcon.displayName = 'HeadsetOffIcon';
      