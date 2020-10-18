import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ZipBoxIcon: FC<IconInterface> = function ZipBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ZipBoxIcon ${className}`;
      return (
        <Icon alt="ZipBox" className={classNames} {...propsRest}>
          <path d="M14,17H12V15H10V13H12V15H14M14,9H12V11H14V13H12V11H10V9H12V7H10V5H12V7H14M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

        </Icon>
      );
    };
    ZipBoxIcon.displayName = 'ZipBoxIcon';
      