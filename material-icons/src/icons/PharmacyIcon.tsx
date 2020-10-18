import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PharmacyIcon: FC<IconInterface> = function PharmacyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PharmacyIcon ${className}`;
      return (
        <Icon alt="Pharmacy" className={classNames} {...propsRest}>
          <path d="M16,14H13V17H11V14H8V12H11V9H13V12H16M21,5H18.35L19.5,1.85L17.15,1L15.69,5H3V7L5,13L3,19V21H21V19L19,13L21,7V5Z" />

        </Icon>
      );
    };
    PharmacyIcon.displayName = 'PharmacyIcon';
      