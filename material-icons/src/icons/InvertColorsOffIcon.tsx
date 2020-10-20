import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const InvertColorsOffIcon: FC<IconInterface> = function InvertColorsOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `InvertColorsOffIcon ${className}`;
      return (
        <Icon alt="InvertColorsOff" className={classNames} {...propsRest}>
          <path d="M20.65,20.87L18.3,18.5L12,12.23L8.44,8.66L7,7.25L4.27,4.5L3,5.77L5.78,8.55C3.23,11.69 3.42,16.31 6.34,19.24C7.9,20.8 9.95,21.58 12,21.58C13.79,21.58 15.57,21 17.03,19.8L19.73,22.5L21,21.23L20.65,20.87M12,19.59C10.4,19.59 8.89,18.97 7.76,17.83C6.62,16.69 6,15.19 6,13.59C6,12.27 6.43,11 7.21,10L12,14.77V19.59M12,5.1V9.68L19.25,16.94C20.62,14 20.09,10.37 17.65,7.93L12,2.27L8.3,5.97L9.71,7.38L12,5.1Z" />

        </Icon>
      );
    };
    InvertColorsOffIcon.displayName = 'InvertColorsOffIcon';
      