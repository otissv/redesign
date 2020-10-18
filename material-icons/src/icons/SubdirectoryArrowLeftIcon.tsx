import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SubdirectoryArrowLeftIcon: FC<IconInterface> = function SubdirectoryArrowLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SubdirectoryArrowLeftIcon ${className}`;
      return (
        <Icon alt="SubdirectoryArrowLeft" className={classNames} {...propsRest}>
          <path d="M11,9L12.42,10.42L8.83,14H18V4H20V16H8.83L12.42,19.58L11,21L5,15L11,9Z" />

        </Icon>
      );
    };
    SubdirectoryArrowLeftIcon.displayName = 'SubdirectoryArrowLeftIcon';
      