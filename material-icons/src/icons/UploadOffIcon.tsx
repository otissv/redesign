import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UploadOffIcon: FC<IconInterface> = function UploadOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UploadOffIcon ${className}`;
      return (
        <Icon alt="UploadOff" className={classNames} {...propsRest}>
          <path d="M22.11 21.46L2.39 1.73L1.11 3L6.56 8.45L5 10H8.11L9 10.89V16H14.11L16.11 18H5V20H18.11L20.84 22.73L22.11 21.46M15 10H19L12 3L9.1 5.9L15 11.8V10Z" />

        </Icon>
      );
    };
    UploadOffIcon.displayName = 'UploadOffIcon';
      