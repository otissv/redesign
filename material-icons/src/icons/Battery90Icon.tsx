import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Battery90Icon: FC<IconInterface> = function Battery90Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Battery90Icon ${className}`;
      return (
        <Icon alt="Battery90" className={classNames} {...propsRest}>
          <path d="M16,8H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z" />

        </Icon>
      );
    };
    Battery90Icon.displayName = 'Battery90Icon';
      