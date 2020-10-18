import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MicroscopeIcon: FC<IconInterface> = function MicroscopeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicroscopeIcon ${className}`;
      return (
        <Icon alt="Microscope" className={classNames} {...propsRest}>
          <path d="M9.46,6.28L11.05,9C8.47,9.26 6.5,11.41 6.5,14A5,5 0 0,0 11.5,19C13.55,19 15.31,17.77 16.08,16H13.5V14H21.5V16H19.25C18.84,17.57 17.97,18.96 16.79,20H19.5V22H3.5V20H6.21C4.55,18.53 3.5,16.39 3.5,14C3.5,10.37 5.96,7.2 9.46,6.28M12.74,2.07L13.5,3.37L14.36,2.87L17.86,8.93L14.39,10.93L10.89,4.87L11.76,4.37L11,3.07L12.74,2.07Z" />

        </Icon>
      );
    };
    MicroscopeIcon.displayName = 'MicroscopeIcon';
      