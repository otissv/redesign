import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const QualityHighIcon: FC<IconInterface> = function QualityHighIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `QualityHighIcon ${className}`;
      return (
        <Icon alt="QualityHigh" className={classNames} {...propsRest}>
          <path d="M14.5,13.5H16.5V10.5H14.5M18,14A1,1 0 0,1 17,15H16.25V16.5H14.75V15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" />

        </Icon>
      );
    };
    QualityHighIcon.displayName = 'QualityHighIcon';
      