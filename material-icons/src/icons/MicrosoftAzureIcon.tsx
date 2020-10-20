import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MicrosoftAzureIcon: FC<IconInterface> = function MicrosoftAzureIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftAzureIcon ${className}`;
      return (
        <Icon alt="MicrosoftAzure" className={classNames} {...propsRest}>
          <path d="M13.05,4.24L6.56,18.05L2,18L7.09,9.24L13.05,4.24M13.75,5.33L22,19.76H6.74L16.04,18.1L11.17,12.31L13.75,5.33Z" />

        </Icon>
      );
    };
    MicrosoftAzureIcon.displayName = 'MicrosoftAzureIcon';
      