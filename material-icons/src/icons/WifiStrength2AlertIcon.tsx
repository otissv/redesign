import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WifiStrength2AlertIcon: FC<IconInterface> = function WifiStrength2AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WifiStrength2AlertIcon ${className}`;
      return (
        <Icon alt="WifiStrength2Alert" className={classNames} {...propsRest}>
          <path d="M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C14.45,18.45 16.68,15.68 19,12.78V9.59L17.5,11.43C16.26,10.74 14.37,10 12,10C9.62,10 7.74,10.75 6.5,11.43L3.27,7.44C5.91,5.85 8.93,5 12,5C15.07,5 18.09,5.86 20.71,7.45L20.27,8H22.84C23.09,7.7 23.41,7.29 23.65,7C20.32,4.41 16.22,3 12,3M21,10V18H23V10M21,20V22H23V20" />

        </Icon>
      );
    };
    WifiStrength2AlertIcon.displayName = 'WifiStrength2AlertIcon';
      