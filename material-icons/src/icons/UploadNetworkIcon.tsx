import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const UploadNetworkIcon: FC<IconInterface> = function UploadNetworkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UploadNetworkIcon ${className}`;
      return (
        <Icon alt="UploadNetwork" className={classNames} {...propsRest}>
          <path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17M12,5.5L7.5,10H11V14H13V10H16.5L12,5.5Z" />

        </Icon>
      );
    };
    UploadNetworkIcon.displayName = 'UploadNetworkIcon';
      