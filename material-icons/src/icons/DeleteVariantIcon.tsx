import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DeleteVariantIcon: FC<IconInterface> = function DeleteVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteVariantIcon ${className}`;
      return (
        <Icon alt="DeleteVariant" className={classNames} {...propsRest}>
          <path d="M21.03,3L18,20.31C17.83,21.27 17,22 16,22H8C7,22 6.17,21.27 6,20.31L2.97,3H21.03M5.36,5L8,20H16L18.64,5H5.36M9,18V14H13V18H9M13,13.18L9.82,10L13,6.82L16.18,10L13,13.18Z" />

        </Icon>
      );
    };
    DeleteVariantIcon.displayName = 'DeleteVariantIcon';
      