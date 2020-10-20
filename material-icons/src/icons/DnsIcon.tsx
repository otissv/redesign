import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DnsIcon: FC<IconInterface> = function DnsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DnsIcon ${className}`;
      return (
        <Icon alt="Dns" className={classNames} {...propsRest}>
          <path d="M7,9A2,2 0 0,1 5,7A2,2 0 0,1 7,5A2,2 0 0,1 9,7A2,2 0 0,1 7,9M20,3H4A1,1 0 0,0 3,4V10A1,1 0 0,0 4,11H20A1,1 0 0,0 21,10V4A1,1 0 0,0 20,3M7,19A2,2 0 0,1 5,17A2,2 0 0,1 7,15A2,2 0 0,1 9,17A2,2 0 0,1 7,19M20,13H4A1,1 0 0,0 3,14V20A1,1 0 0,0 4,21H20A1,1 0 0,0 21,20V14A1,1 0 0,0 20,13Z" />

        </Icon>
      );
    };
    DnsIcon.displayName = 'DnsIcon';
      