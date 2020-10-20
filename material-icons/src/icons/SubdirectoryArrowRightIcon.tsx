import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SubdirectoryArrowRightIcon: FC<IconInterface> = function SubdirectoryArrowRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SubdirectoryArrowRightIcon ${className}`;
      return (
        <Icon alt="SubdirectoryArrowRight" className={classNames} {...propsRest}>
          <path d="M19,15L13,21L11.58,19.58L15.17,16H4V4H6V14H15.17L11.58,10.42L13,9L19,15Z" />

        </Icon>
      );
    };
    SubdirectoryArrowRightIcon.displayName = 'SubdirectoryArrowRightIcon';
      