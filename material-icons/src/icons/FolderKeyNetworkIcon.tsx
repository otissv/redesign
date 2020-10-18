import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderKeyNetworkIcon: FC<IconInterface> = function FolderKeyNetworkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderKeyNetworkIcon ${className}`;
      return (
        <Icon alt="FolderKeyNetwork" className={classNames} {...propsRest}>
          <path d="M6,5C4.89,5 4,5.89 4,7V15A2,2 0 0,0 6,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15A1,1 0 0,0 14,19H13V17H18A2,2 0 0,0 20,15V9A2,2 0 0,0 18,7H12L10,5H6M9,9C10.31,9 11.42,9.83 11.83,11H17V13H16V15H14V13H11.83C11.42,14.17 10.31,15 9,15A3,3 0 0,1 6,12A3,3 0 0,1 9,9M9,11A1,1 0 0,0 8,12C8,12.56 8.45,13 9,13A1,1 0 0,0 10,12A1,1 0 0,0 9,11Z" />

        </Icon>
      );
    };
    FolderKeyNetworkIcon.displayName = 'FolderKeyNetworkIcon';
      