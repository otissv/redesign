import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DiscPlayerIcon: FC<IconInterface> = function DiscPlayerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DiscPlayerIcon ${className}`;
      return (
        <Icon alt="DiscPlayer" className={classNames} {...propsRest}>
          <path d="M14.5,10.37C15.54,10.37 16.38,9.53 16.38,8.5C16.38,7.46 15.54,6.63 14.5,6.63C13.46,6.63 12.63,7.46 12.63,8.5A1.87,1.87 0 0,0 14.5,10.37M14.5,1A7.5,7.5 0 0,1 22,8.5C22,10.67 21.08,12.63 19.6,14H9.4C7.93,12.63 7,10.67 7,8.5C7,4.35 10.36,1 14.5,1M6,21V22H4V21H2V15H22V21H20V22H18V21H6M4,18V19H13V18H4M15,17V19H17V17H15M19,17A1,1 0 0,0 18,18A1,1 0 0,0 19,19A1,1 0 0,0 20,18A1,1 0 0,0 19,17Z" />

        </Icon>
      );
    };
    DiscPlayerIcon.displayName = 'DiscPlayerIcon';
      