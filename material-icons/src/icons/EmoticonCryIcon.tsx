import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const EmoticonCryIcon: FC<IconInterface> = function EmoticonCryIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmoticonCryIcon ${className}`;
      return (
        <Icon alt="EmoticonCry" className={classNames} {...propsRest}>
          <path d="M5.14,17.57C5.14,16.5 6.32,14.5 7.57,12.81C8.82,14.5 10,16.5 10,17.57A2.43,2.43 0 0,1 7.57,20C6.23,20 5.14,18.91 5.14,17.57M22,12A10,10 0 0,1 12,22C11.08,22 10.18,21.86 9.33,21.63C10.9,20.95 12,19.39 12,17.57C12,17.12 11.89,16.6 11.69,16C11.79,16 11.89,16 12,16C13.25,16 14.32,16.5 14.77,17.23L16.19,15.81C15.29,14.72 13.75,14 12,14C11.59,14 11.19,14.04 10.81,14.12C10.38,13.36 9.85,12.53 9.19,11.63L8.71,11C9.42,10.87 10,10.23 10,9.5C10,8.7 9.3,8 8.5,8C7.7,8 7,8.7 7,9.5C7,9.69 7.04,9.87 7.11,10.04L5.96,11.63C4.4,13.75 3.5,15.5 3.23,16.81C2.45,15.38 2,13.74 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M17,9.5C17,8.7 16.3,8 15.5,8C14.7,8 14,8.7 14,9.5C14,10.3 14.7,11 15.5,11C16.3,11 17,10.3 17,9.5Z" />

        </Icon>
      );
    };
    EmoticonCryIcon.displayName = 'EmoticonCryIcon';
      