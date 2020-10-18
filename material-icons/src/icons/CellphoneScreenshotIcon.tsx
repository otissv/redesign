import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CellphoneScreenshotIcon: FC<IconInterface> = function CellphoneScreenshotIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneScreenshotIcon ${className}`;
      return (
        <Icon alt="CellphoneScreenshot" className={classNames} {...propsRest}>
          <path d="M7,1A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M7,4H17V20H7V4M9,6V10H10.5V7.5H13V6H9M13.5,14V16.5H11V18H15V14H13.5Z" />

        </Icon>
      );
    };
    CellphoneScreenshotIcon.displayName = 'CellphoneScreenshotIcon';
      