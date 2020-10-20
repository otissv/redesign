import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CodeNotEqualIcon: FC<IconInterface> = function CodeNotEqualIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CodeNotEqualIcon ${className}`;
      return (
        <Icon alt="CodeNotEqual" className={classNames} {...propsRest}>
          <path d="M6,15H8V17H6M11,13H18V15H11M11,9H18V11H11M6,7H8V13H6M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" />

        </Icon>
      );
    };
    CodeNotEqualIcon.displayName = 'CodeNotEqualIcon';
      