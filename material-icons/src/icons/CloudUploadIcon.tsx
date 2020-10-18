import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CloudUploadIcon: FC<IconInterface> = function CloudUploadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CloudUploadIcon ${className}`;
      return (
        <Icon alt="CloudUpload" className={classNames} {...propsRest}>
          <path d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />

        </Icon>
      );
    };
    CloudUploadIcon.displayName = 'CloudUploadIcon';
      