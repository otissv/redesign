import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PublishIcon: FC<IconInterface> = function PublishIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PublishIcon ${className}`;
      return (
        <Icon alt="Publish" className={classNames} {...propsRest}>
          <path d="M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z" />

        </Icon>
      );
    };
    PublishIcon.displayName = 'PublishIcon';
      