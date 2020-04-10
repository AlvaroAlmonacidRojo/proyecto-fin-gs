import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

export type PermissionsMode = 'all' | 'any';

export interface ContainerPermissions {
  mode: PermissionsMode;
  permissions: [];
}
interface ComponentProps {
  children: ReactElement;
  lockedElement?: ReactElement;
  require: ContainerPermissions;
}
type Props = ComponentProps;


type PermissionsCheck = (
  permissions: [],
) => boolean;

const authorizeAllCheck: PermissionsCheck = (
  allPermissions,
): boolean => {
  return false;
};

const authorizeAnyCheck: PermissionsCheck = (
  anyPermissions,
): boolean => {
  return false;
};

const authorizeChecks: Record<PermissionsMode, PermissionsCheck> = {
  all: authorizeAllCheck,
  any: authorizeAnyCheck,
};

const AuthorizeContainer: FC<Props> = ({
  require,
  children,
  lockedElement = null,
}) => {
  const isAuthorized = false;

  return isAuthorized ? children : lockedElement;
};

const ConnectedAuthorizeContainer = connect(
  null,
  null,
)(AuthorizeContainer);

export default ConnectedAuthorizeContainer;

export const isAuth = (
  require: ContainerPermissions,
) => authorizeChecks[require.mode](require.permissions);
