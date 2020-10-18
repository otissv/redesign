import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileSendIcon: FC<IconInterface> = function FileSendIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileSendIcon ${className}`;
      return (
        <Icon alt="FileSend" className={classNames} {...propsRest}>
          <path d="M14,2H6C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M12.54,19.37V17.37H8.54V15.38H12.54V13.38L15.54,16.38L12.54,19.37M13,9V3.5L18.5,9H13Z" />

        </Icon>
      );
    };
    FileSendIcon.displayName = 'FileSendIcon';
      