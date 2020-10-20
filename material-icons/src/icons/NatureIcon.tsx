import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NatureIcon: FC<IconInterface> = function NatureIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NatureIcon ${className}`;
      return (
        <Icon alt="Nature" className={classNames} {...propsRest}>
          <path d="M13,16.12C16.47,15.71 19.17,12.76 19.17,9.17C19.17,5.3 16.04,2.17 12.17,2.17A7,7 0 0,0 5.17,9.17C5.17,12.64 7.69,15.5 11,16.06V20H5V22H19V20H13V16.12Z" />

        </Icon>
      );
    };
    NatureIcon.displayName = 'NatureIcon';
      