import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RingIcon: FC<IconInterface> = function RingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RingIcon ${className}`;
      return (
        <Icon alt="Ring" className={classNames} {...propsRest}>
          <path d="M12,10L8,4.4L9.6,2H14.4L16,4.4L12,10M15.5,6.8L14.3,8.5C16.5,9.4 18,11.5 18,14A6,6 0 0,1 12,20A6,6 0 0,1 6,14C6,11.5 7.5,9.4 9.7,8.5L8.5,6.8C5.8,8.1 4,10.8 4,14A8,8 0 0,0 12,22A8,8 0 0,0 20,14C20,10.8 18.2,8.1 15.5,6.8Z" />

        </Icon>
      );
    };
    RingIcon.displayName = 'RingIcon';
      