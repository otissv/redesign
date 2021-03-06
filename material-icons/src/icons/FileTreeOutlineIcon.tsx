import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileTreeOutlineIcon: FC<IconInterface> = function FileTreeOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileTreeOutlineIcon ${className}`;
      return (
        <Icon alt="FileTreeOutline" className={classNames} {...propsRest}>
          <path d="M12 13H7V18H12V20H5V10H7V11H12V13M8 4V6H4V4H8M10 2H2V8H10V2M20 11V13H16V11H20M22 9H14V15H22V9M20 18V20H16V18H20M22 16H14V22H22V16Z" />

        </Icon>
      );
    };
    FileTreeOutlineIcon.displayName = 'FileTreeOutlineIcon';
      