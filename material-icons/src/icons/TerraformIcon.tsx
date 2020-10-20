import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TerraformIcon: FC<IconInterface> = function TerraformIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TerraformIcon ${className}`;
      return (
        <Icon alt="Terraform" className={classNames} {...propsRest}>
          <path d="M21 5.4V11.8L15.4 15V8.7L21 5.4M14.8 8.7V15L9.2 11.8V5.4L14.8 8.7M14.8 15.7V22.1L9.2 18.9V12.5L14.8 15.7M8.6 5.1V11.5L3 8.3V1.9L8.6 5.1Z" />

        </Icon>
      );
    };
    TerraformIcon.displayName = 'TerraformIcon';
      