import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WatchVariantIcon: FC<IconInterface> = function WatchVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WatchVariantIcon ${className}`;
      return (
        <Icon alt="WatchVariant" className={classNames} {...propsRest}>
          <path d="M8,0L7.17,5H7A2,2 0 0,0 5,7V17C5,18.11 5.9,19 7,19H7.17L8,24H16L16.83,19H17A2,2 0 0,0 19,17V7C19,5.89 18.1,5 17,5H16.83L16,0H8M7,7H17V17H7V7Z" />

        </Icon>
      );
    };
    WatchVariantIcon.displayName = 'WatchVariantIcon';
      