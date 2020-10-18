import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HighDefinitionBoxIcon: FC<IconInterface> = function HighDefinitionBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HighDefinitionBoxIcon ${className}`;
      return (
        <Icon alt="HighDefinitionBox" className={classNames} {...propsRest}>
          <path d="M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M11,15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11V15M13,9H17A1,1 0 0,1 18,10V14A1,1 0 0,1 17,15H13V9M14.5,13.5H16.5V10.5H14.5V13.5Z" />

        </Icon>
      );
    };
    HighDefinitionBoxIcon.displayName = 'HighDefinitionBoxIcon';
      