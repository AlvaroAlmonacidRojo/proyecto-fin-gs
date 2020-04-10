import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
  } from '@material-ui/core/styles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircle from '@material-ui/icons/AddCircle';
import Assignment from '@material-ui/icons/Assignment';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import BarChartIcon from '@material-ui/icons/BarChart';
import BeachAccess from '@material-ui/icons/BeachAccess';
import Cached from '@material-ui/icons/Cached';
import Calendar from '@material-ui/icons/CalendarToday';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallMergeIcon from '@material-ui/icons/CallMerge';
import CancelIcon from '@material-ui/icons/Cancel';
import ChatIcon from '@material-ui/icons/Chat';
import Check from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import Close from '@material-ui/icons/Close';
import CloudOff from '@material-ui/icons/CloudOff';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Description from '@material-ui/icons/Description';
import Done from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import FolderOpen from '@material-ui/icons/FolderOpen';
import GavelIcon from '@material-ui/icons/Gavel';
import GetApp from '@material-ui/icons/GetApp';
import Group from '@material-ui/icons/Group';
import CancelOutlineIcon from '@material-ui/icons/HighlightOff';
import Home from '@material-ui/icons/Home';
import ImportContacts from '@material-ui/icons/ImportContacts';
import InfoIcon from '@material-ui/icons/Info';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LaunchIcon from '@material-ui/icons/Launch';
import LockIcon from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import Loop from '@material-ui/icons/Loop';
import MoreHorizontalIcon from '@material-ui/icons/MoreHoriz';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import NotInterested from '@material-ui/icons/NotInterested';
import CustomersIcon from '@material-ui/icons/People';
import CustomerIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneAndriodIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PriorityHigh from '@material-ui/icons/PriorityHigh';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Replay from '@material-ui/icons/Replay';
import ReportIcon from '@material-ui/icons/Report';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Warning from '@material-ui/icons/Warning';
import classNames from 'classnames';
import React, { FC } from 'react';

const styles = (theme: Theme) =>
    createStyles({
      small: {
        fontSize: 20,
      },
      primary: {
        color: theme.colors.purple,
      },
      blue: {
        color: theme.colors.denim100,
      },
    });
export type Icons =
    | 'account'
    | 'addcircle'
    | 'assignment'
    | 'assigmentLate'
    | 'barChart'
    | 'beachAccess'
    | 'cached'
    | 'calendar'
    | 'callMerge'
    | 'chat'
    | 'check'
    | 'chevronLeft'
    | 'chevronRight'
    | 'clear'
    | 'close'
    | 'cloudOff'
    | 'compareArrows'
    | 'customer'
    | 'customers'
    | 'dashboard'
    | 'description'
    | 'done'
    | 'edit'
    | 'error'
    | 'errorOutline'
    | 'expandLess'
    | 'expandMore'
    | 'failure'
    | 'failureOutline'
    | 'fileCopy'
    | 'folderOpen'
    | 'gavel'
    | 'getApp'
    | 'group'
    | 'home'
    | 'importContacts'
    | 'info'
    | 'keyboardArrowDownIcon'
    | 'launch'
    | 'lock'
    | 'lockOpen'
    | 'loop'
    | 'moneySent'
    | 'more'
    | 'notificationImportant'
    | 'notInterested'
    | 'personOutline'
    | 'phoneAndroid'
    | 'phoneAndroid'
    | 'phoneIphone'
    | 'priorityHigh'
    | 'removeCircle'
    | 'replay'
    | 'report'
    | 'sentiment_very_dissatisfied'
    | 'tabletAndroid'
    | 'tabletMac'
    | 'thumbUp'
    | 'tick'
    | 'tickOutline'
    | 'warning';
interface ComponentProps {
    type: Icons;
    primary?: boolean;
    blue?: boolean;
  }
type Props = ComponentProps &
    WithStyles<typeof styles> & { className?: string } & SvgIconProps;

export const iconToComponentMap: Readonly<Record<Icons, typeof SvgIcon>> = {
    account: AccountCircleIcon,
    addcircle: AddCircle,
    assignment: Assignment,
    assigmentLate: AssignmentLateIcon,
    barChart: BarChartIcon,
    beachAccess: BeachAccess,
    cached: Cached,
    calendar: Calendar,
    callMerge: CallMergeIcon,
    chat: ChatIcon,
    check: Check,
    chevronLeft: ChevronLeftIcon,
    chevronRight: ChevronRightIcon,
    clear: Clear,
    close: Close,
    cloudOff: CloudOff,
    compareArrows: CompareArrowsIcon,
    customer: CustomerIcon,
    customers: CustomersIcon,
    dashboard: DashboardIcon,
    description: Description,
    done: Done,
    edit: Edit,
    error: ErrorIcon,
    errorOutline: ErrorOutlineIcon,
    expandLess: ExpandLessIcon,
    expandMore: ExpandMoreIcon,
    failure: CancelIcon,
    failureOutline: CancelOutlineIcon,
    fileCopy: FileCopyOutlinedIcon,
    folderOpen: FolderOpen,
    gavel: GavelIcon,
    getApp: GetApp,
    group: Group,
    home: Home,
    importContacts: ImportContacts,
    info: InfoIcon,
    keyboardArrowDownIcon: KeyboardArrowDownIcon,
    launch: LaunchIcon,
    lock: LockIcon,
    lockOpen: LockOpen,
    loop: Loop,
    moneySent: CallMadeIcon,
    more: MoreHorizontalIcon,
    notificationImportant: NotificationImportant,
    notInterested: NotInterested,
    personOutline: PersonOutlineIcon,
    phoneAndroid: PhoneAndriodIcon,
    phoneIphone: PhoneIphoneIcon,
    priorityHigh: PriorityHigh,
    removeCircle: RemoveCircle,
    replay: Replay,
    report: ReportIcon,
    sentiment_very_dissatisfied: SentimentVeryDissatisfiedIcon,
    tabletAndroid: TabletAndroidIcon,
    tabletMac: TabletMacIcon,
    thumbUp: ThumbUp,
    tick: CheckCircleIcon,
    tickOutline: CheckCircleOutlineIcon,
    warning: Warning,
  };
export const iconKeys: Icons[] = Object.keys(iconToComponentMap) as Icons[];
export const Icon: FC<Props> = ({
    type,
    classes,
    primary,
    blue,
    className: classNameProp,
    lang,
    ...props
  }) => {
    const IconComponent = iconToComponentMap[type];
    return (
      <IconComponent
        {...props}
        className={classNames(classNameProp, {
          [classes.primary]: primary,
          [classes.blue]: blue,
        })}
      />
    );
  };
export default withStyles(styles)(Icon);
