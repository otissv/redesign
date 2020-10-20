import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileCertificateIcon: FC<IconInterface> = function FileCertificateIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileCertificateIcon ${className}`;
      return (
        <Icon alt="FileCertificate" className={classNames} {...propsRest}>
          <path d="M14 2H7A2 2 0 0 0 5 4V18A2 2 0 0 0 7 20H10V23L12 22L14 23V20H17A2 2 0 0 0 19 18V7M14 15V17L12 16L10 17V15L8 14L10 13V11L12 12L14 11V13L16 14M13 8V3.5L17.5 8Z" />

        </Icon>
      );
    };
    FileCertificateIcon.displayName = 'FileCertificateIcon';
      