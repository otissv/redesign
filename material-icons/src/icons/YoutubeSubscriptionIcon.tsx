import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const YoutubeSubscriptionIcon: FC<IconInterface> = function YoutubeSubscriptionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `YoutubeSubscriptionIcon ${className}`;
      return (
        <Icon alt="YoutubeSubscription" className={classNames} {...propsRest}>
          <path d="M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A2,2 0 0,1 4,10H20A2,2 0 0,1 22,12M16,16L10,12.73V19.26L16,16Z" />

        </Icon>
      );
    };
    YoutubeSubscriptionIcon.displayName = 'YoutubeSubscriptionIcon';
      