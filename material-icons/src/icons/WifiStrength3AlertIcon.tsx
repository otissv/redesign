import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WifiStrength3AlertIcon: FC<IconInterface> = function WifiStrength3AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WifiStrength3AlertIcon ${className}`;
      return (
        <Icon alt="WifiStrength3Alert" className={classNames} {...propsRest}>
          <path d="M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C14.45,18.45 16.68,15.68 19,12.78V9.59L18.77,9.88C17.26,9 14.88,8 12,8C9,8 6.68,9 5.21,9.84L3.27,7.44C5.91,5.85 8.93,5 12,5C15.07,5 18.09,5.86 20.71,7.45L20.27,8H22.84C23.09,7.7 23.41,7.29 23.65,7C20.32,4.41 16.22,3 12,3M21,10V18H23V10M21,20V22H23V20" />

        </Icon>
      );
    };
    WifiStrength3AlertIcon.displayName = 'WifiStrength3AlertIcon';
      