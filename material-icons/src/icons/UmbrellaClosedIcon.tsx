import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UmbrellaClosedIcon: FC<IconInterface> = function UmbrellaClosedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UmbrellaClosedIcon ${className}`;
      return (
        <Icon alt="UmbrellaClosed" className={classNames} {...propsRest}>
          <path d="M12 2C11.6 2 11.3 2.2 11.1 2.6L6.5 15H11V19C11 19.6 10.6 20 10 20C9.4 20 9 19.6 9 19V18H7V19C7 20.7 8.3 22 10 22S13 20.7 13 19V15H17.5L12.9 2.6C12.7 2.2 12.4 2 12 2Z" />

        </Icon>
      );
    };
    UmbrellaClosedIcon.displayName = 'UmbrellaClosedIcon';
      