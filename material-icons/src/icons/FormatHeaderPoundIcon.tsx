import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatHeaderPoundIcon: FC<IconInterface> = function FormatHeaderPoundIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeaderPoundIcon ${className}`;
      return (
        <Icon alt="FormatHeaderPound" className={classNames} {...propsRest}>
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z" />

        </Icon>
      );
    };
    FormatHeaderPoundIcon.displayName = 'FormatHeaderPoundIcon';
      