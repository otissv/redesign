import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HighDefinitionIcon: FC<IconInterface> = function HighDefinitionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HighDefinitionIcon ${className}`;
      return (
        <Icon alt="HighDefinition" className={classNames} {...propsRest}>
          <path d="M5,7H7V11H9V7H11V17H9V13H7V17H5V7M13,7H16A3,3 0 0,1 19,10V14A3,3 0 0,1 16,17H13V7M16,15A1,1 0 0,0 17,14V10A1,1 0 0,0 16,9H15V15H16Z" />

        </Icon>
      );
    };
    HighDefinitionIcon.displayName = 'HighDefinitionIcon';
      