import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CityIcon: FC<IconInterface> = function CityIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CityIcon ${className}`;
      return (
        <Icon alt="City" className={classNames} {...propsRest}>
          <path d="M19,15H17V13H19M19,19H17V17H19M13,7H11V5H13M13,11H11V9H13M13,15H11V13H13M13,19H11V17H13M7,11H5V9H7M7,15H5V13H7M7,19H5V17H7M15,11V5L12,2L9,5V7H3V21H21V11H15Z" />

        </Icon>
      );
    };
    CityIcon.displayName = 'CityIcon';
      