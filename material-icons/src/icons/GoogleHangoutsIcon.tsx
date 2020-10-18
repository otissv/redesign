import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GoogleHangoutsIcon: FC<IconInterface> = function GoogleHangoutsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GoogleHangoutsIcon ${className}`;
      return (
        <Icon alt="GoogleHangouts" className={classNames} {...propsRest}>
          <path d="M15,11L14,13H12.5L13.5,11H12V8H15M11,11L10,13H8.5L9.5,11H8V8H11M11.5,2A8.5,8.5 0 0,0 3,10.5A8.5,8.5 0 0,0 11.5,19H12V22.5C16.86,20.15 20,15 20,10.5C20,5.8 16.19,2 11.5,2Z" />

        </Icon>
      );
    };
    GoogleHangoutsIcon.displayName = 'GoogleHangoutsIcon';
      