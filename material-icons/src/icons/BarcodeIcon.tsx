import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BarcodeIcon: FC<IconInterface> = function BarcodeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BarcodeIcon ${className}`;
      return (
        <Icon alt="Barcode" className={classNames} {...propsRest}>
          <path d="M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z" />

        </Icon>
      );
    };
    BarcodeIcon.displayName = 'BarcodeIcon';
      