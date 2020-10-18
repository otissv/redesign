import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WifiStrength4AlertIcon: FC<IconInterface> = function WifiStrength4AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WifiStrength4AlertIcon ${className}`;
      return (
        <Icon alt="WifiStrength4Alert" className={classNames} {...propsRest}>
          <path d="M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C14.45,18.45 16.68,15.68 19,12.78V8H22.84C23.09,7.7 23.41,7.29 23.65,7C20.32,4.41 16.22,3 12,3M21,10V18H23V10M21,20V22H23V20" />

        </Icon>
      );
    };
    WifiStrength4AlertIcon.displayName = 'WifiStrength4AlertIcon';
      