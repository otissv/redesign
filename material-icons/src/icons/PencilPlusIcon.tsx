import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PencilPlusIcon: FC<IconInterface> = function PencilPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PencilPlusIcon ${className}`;
      return (
        <Icon alt="PencilPlus" className={classNames} {...propsRest}>
          <path d="M20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18,2.9 17.4,2.9 17,3.3L15.2,5.1L19,8.9M3,17.2V21H6.8L17.8,9.9L14.1,6.1L3,17.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z" />

        </Icon>
      );
    };
    PencilPlusIcon.displayName = 'PencilPlusIcon';
      