import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WifiStrength4Icon: FC<IconInterface> = function WifiStrength4Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `WifiStrength4Icon ${className}`;
      return (
        <Icon alt="WifiStrength4" className={classNames} {...propsRest}>
          <path d="M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C16.08,16.42 20.24,11.24 23.65,7C20.32,4.41 16.22,3 12,3Z" />

        </Icon>
      );
    };
    WifiStrength4Icon.displayName = 'WifiStrength4Icon';
      