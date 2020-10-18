import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LinkIcon: FC<IconInterface> = function LinkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LinkIcon ${className}`;
      return (
        <Icon alt="Link" className={classNames} {...propsRest}>
          <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />

        </Icon>
      );
    };
    LinkIcon.displayName = 'LinkIcon';
      