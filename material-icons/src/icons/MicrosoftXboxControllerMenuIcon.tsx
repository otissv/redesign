import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MicrosoftXboxControllerMenuIcon: FC<IconInterface> = function MicrosoftXboxControllerMenuIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftXboxControllerMenuIcon ${className}`;
      return (
        <Icon alt="MicrosoftXboxControllerMenu" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H18V9H6V7M6,11H18V13H6V11M6,15H18V17H6V15Z" />

        </Icon>
      );
    };
    MicrosoftXboxControllerMenuIcon.displayName = 'MicrosoftXboxControllerMenuIcon';
      