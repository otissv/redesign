import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PostageStampIcon: FC<IconInterface> = function PostageStampIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PostageStampIcon ${className}`;
      return (
        <Icon alt="PostageStamp" className={classNames} {...propsRest}>
          <path d="M2,2V5.5C3.1,5.5 4,6.62 4,8C4,9.38 3.1,10.5 2,10.5V13.5C3.1,13.5 4,14.62 4,16C4,17.38 3.1,18.5 2,18.5V22H5.5C5.5,20.9 6.62,20 8,20C9.38,20 10.5,20.9 10.5,22H13.5C13.5,20.9 14.62,20 16,20C17.38,20 18.5,20.9 18.5,22H22V18.5C20.9,18.5 20,17.38 20,16V16C20,14.62 20.9,13.5 22,13.5V10.5C20.9,10.5 20,9.38 20,8V8C20,6.62 20.9,5.5 22,5.5V2H18.5C18.5,3.1 17.38,4 16,4C14.62,4 13.5,3.1 13.5,2H10.5C10.5,3.1 9.38,4 8,4C6.62,4 5.5,3.1 5.5,2H2M6,6H18V18H6V6M9,7A2,2 0 0,0 7,9A2,2 0 0,0 9,11A2,2 0 0,0 11,9A2,2 0 0,0 9,7M17,10L14,13L12,12L7,17H17V10Z" />

        </Icon>
      );
    };
    PostageStampIcon.displayName = 'PostageStampIcon';
      