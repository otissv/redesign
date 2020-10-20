import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SourceRepositoryMultipleIcon: FC<IconInterface> = function SourceRepositoryMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SourceRepositoryMultipleIcon ${className}`;
      return (
        <Icon alt="SourceRepositoryMultiple" className={classNames} {...propsRest}>
          <path d="M8,0H20A2,2 0 0,1 22,2V18A2,2 0 0,1 20,20H8A2,2 0 0,1 6,18V2A2,2 0 0,1 8,0M14.75,11.5C17.5,11.5 18.24,9.47 18.43,8.4C19.34,8.11 20,7.26 20,6.25C20,5 19,4 17.75,4C16.5,4 15.5,5 15.5,6.25C15.5,7.19 16.07,8 16.89,8.33C16.67,9 16,10 14,10C12.62,10 11.66,10.35 11,10.84V6.87C11.87,6.56 12.5,5.73 12.5,4.75C12.5,3.5 11.5,2.5 10.25,2.5C9,2.5 8,3.5 8,4.75C8,5.73 8.63,6.56 9.5,6.87V13.13C8.63,13.44 8,14.27 8,15.25C8,16.5 9,17.5 10.25,17.5C11.5,17.5 12.5,16.5 12.5,15.25C12.5,14.32 11.94,13.5 11.13,13.18C11.41,12.5 12.23,11.5 14.75,11.5M10.25,14.5A0.75,0.75 0 0,1 11,15.25A0.75,0.75 0 0,1 10.25,16A0.75,0.75 0 0,1 9.5,15.25A0.75,0.75 0 0,1 10.25,14.5M10.25,4A0.75,0.75 0 0,1 11,4.75A0.75,0.75 0 0,1 10.25,5.5A0.75,0.75 0 0,1 9.5,4.75A0.75,0.75 0 0,1 10.25,4M17.75,5.5A0.75,0.75 0 0,1 18.5,6.25A0.75,0.75 0 0,1 17.75,7A0.75,0.75 0 0,1 17,6.25A0.75,0.75 0 0,1 17.75,5.5M16,22V24H4A2,2 0 0,1 2,22V6H4V22H16Z" />

        </Icon>
      );
    };
    SourceRepositoryMultipleIcon.displayName = 'SourceRepositoryMultipleIcon';
      